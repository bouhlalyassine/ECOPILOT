from datetime import date
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from ..database import get_session
from ..models import (
    KPI,
    MetricDefinition,
    MetricEntry,
    Report,
    ReportCreate,
    ReportRead,
    ReportSection,
    ReportSectionRead,
    ReportUpdate,
)

router = APIRouter()


def _collect_entries(
    metric: MetricDefinition,
    period_start: date,
    period_end: date,
    session: Session,
) -> List[MetricEntry]:
    statement = (
        select(MetricEntry)
        .where(MetricEntry.metric_id == metric.id)
        .where(MetricEntry.period_start >= period_start)
        .where(MetricEntry.period_end <= period_end)
        .order_by(MetricEntry.period_end.desc())
    )
    return session.exec(statement).all()


def _build_analysis(
    entries: List[MetricEntry], target: Optional[float]
) -> tuple[Optional[str], Optional[str], Optional[float], Optional[str]]:
    if not entries:
        return None, None, None, None

    latest = entries[0]
    previous = entries[1] if len(entries) > 1 else None
    trend = None
    if previous:
        if latest.value == previous.value:
            trend = "stable"
        elif latest.value > previous.value:
            trend = "hausse"
        else:
            trend = "baisse"

    analysis_parts = [f"Valeur la plus récente : {latest.value}"]
    if previous:
        analysis_parts.append(f"Valeur précédente : {previous.value}")
    if trend:
        analysis_parts.append(f"Tendance : {trend}")

    variance = None
    recommendations = None
    if target is not None:
        variance = latest.value - target
        if variance > 0:
            recommendations = (
                "Renforcer les actions correctives pour rapprocher l'indicateur de la cible"
            )
        elif variance < 0:
            recommendations = "Capitaliser sur les initiatives actuelles pour maintenir la performance"
        else:
            recommendations = "Poursuivre les efforts : la cible est atteinte"

    analysis = ". ".join(analysis_parts)
    return analysis, recommendations, variance, trend


def _create_sections(
    report: Report,
    metrics: List[MetricDefinition],
    period_start: date,
    period_end: date,
    session: Session,
) -> List[ReportSection]:
    sections: List[ReportSection] = []
    for metric in metrics:
        entries = _collect_entries(metric, period_start, period_end, session)
        if not entries:
            continue

        kpi = session.exec(select(KPI).where(KPI.metric_id == metric.id)).first()
        target = kpi.target_value if kpi and kpi.target_value is not None else None
        analysis, recommendations, variance, trend = _build_analysis(entries, target)

        section = ReportSection(
            report_id=report.id,
            metric_id=metric.id,
            actual_value=entries[0].value,
            target_value=target,
            variance=variance,
            trend=trend,
            analysis=analysis,
            recommendations=recommendations,
        )
        sections.append(section)
        session.add(section)
    return sections


@router.post("/", response_model=ReportRead, status_code=201)
def create_report(
    payload: ReportCreate,
    session: Session = Depends(get_session),
) -> Report:
    if payload.period_end < payload.period_start:
        raise HTTPException(status_code=400, detail="La date de fin doit être postérieure à la date de début")

    report = Report.model_validate(payload)
    session.add(report)
    session.commit()
    session.refresh(report)

    metric_statement = select(MetricDefinition)
    if payload.metric_ids:
        metric_statement = metric_statement.where(MetricDefinition.id.in_(payload.metric_ids))
    metrics = session.exec(metric_statement).all()

    _create_sections(report, metrics, payload.period_start, payload.period_end, session)
    session.commit()
    session.refresh(report)
    return report


@router.get("/", response_model=List[ReportRead])
def list_reports(session: Session = Depends(get_session)) -> List[Report]:
    statement = select(Report).order_by(Report.period_end.desc())
    return session.exec(statement).all()


@router.get("/{report_id}", response_model=ReportRead)
def get_report(report_id: int, session: Session = Depends(get_session)) -> Report:
    report = session.get(Report, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Rapport non trouvé")
    return report


@router.get("/{report_id}/sections", response_model=List[ReportSectionRead])
def get_sections(report_id: int, session: Session = Depends(get_session)) -> List[ReportSection]:
    report = session.get(Report, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Rapport non trouvé")

    statement = select(ReportSection).where(ReportSection.report_id == report_id)
    return session.exec(statement).all()


@router.patch("/{report_id}", response_model=ReportRead)
def update_report(
    report_id: int,
    payload: ReportUpdate,
    session: Session = Depends(get_session),
) -> Report:
    report = session.get(Report, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Rapport non trouvé")

    update_data = payload.model_dump(exclude_unset=True)
    if "period_start" in update_data and "period_end" in update_data:
        if update_data["period_end"] < update_data["period_start"]:
            raise HTTPException(status_code=400, detail="La date de fin doit être postérieure à la date de début")

    for field, value in update_data.items():
        setattr(report, field, value)

    session.add(report)
    session.commit()
    session.refresh(report)
    return report


@router.delete("/{report_id}", status_code=204)
def delete_report(report_id: int, session: Session = Depends(get_session)) -> None:
    report = session.get(Report, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Rapport non trouvé")
    session.delete(report)
    session.commit()
