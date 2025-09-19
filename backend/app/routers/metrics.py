from datetime import date
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, func, select

from ..database import get_session
from ..models import (
    DashboardSnapshot,
    DataCategory,
    DataSource,
    KPI,
    MetricDefinition,
    MetricDefinitionCreate,
    MetricDefinitionRead,
    MetricDefinitionUpdate,
    MetricEntry,
    MetricEntryCreate,
    MetricEntryRead,
    Report,
    ReportStatus,
)

router = APIRouter()


@router.post("/", response_model=MetricDefinitionRead, status_code=201)
def create_metric(
    payload: MetricDefinitionCreate, session: Session = Depends(get_session)
) -> MetricDefinition:
    metric = MetricDefinition.model_validate(payload)
    session.add(metric)
    session.commit()
    session.refresh(metric)
    return metric


@router.get("/", response_model=List[MetricDefinitionRead])
def list_metrics(
    category: Optional[DataCategory] = Query(default=None),
    session: Session = Depends(get_session),
) -> List[MetricDefinition]:
    statement = select(MetricDefinition)
    if category:
        statement = statement.where(MetricDefinition.category == category)
    statement = statement.order_by(MetricDefinition.name)
    metrics = session.exec(statement).all()
    return metrics


@router.get("/{metric_id}", response_model=MetricDefinitionRead)
def get_metric(metric_id: int, session: Session = Depends(get_session)) -> MetricDefinition:
    metric = session.get(MetricDefinition, metric_id)
    if not metric:
        raise HTTPException(status_code=404, detail="Indicateur non trouvé")
    return metric


@router.patch("/{metric_id}", response_model=MetricDefinitionRead)
def update_metric(
    metric_id: int,
    payload: MetricDefinitionUpdate,
    session: Session = Depends(get_session),
) -> MetricDefinition:
    metric = session.get(MetricDefinition, metric_id)
    if not metric:
        raise HTTPException(status_code=404, detail="Indicateur non trouvé")

    update_data = payload.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(metric, field, value)

    session.add(metric)
    session.commit()
    session.refresh(metric)
    return metric


@router.delete("/{metric_id}", status_code=204)
def delete_metric(metric_id: int, session: Session = Depends(get_session)) -> None:
    metric = session.get(MetricDefinition, metric_id)
    if not metric:
        raise HTTPException(status_code=404, detail="Indicateur non trouvé")

    session.delete(metric)
    session.commit()


@router.post("/{metric_id}/entries", response_model=MetricEntryRead, status_code=201)
def add_entry(
    metric_id: int,
    payload: MetricEntryCreate,
    session: Session = Depends(get_session),
) -> MetricEntry:
    metric = session.get(MetricDefinition, metric_id)
    if not metric:
        raise HTTPException(status_code=404, detail="Indicateur non trouvé")

    entry_data = payload.model_dump()
    entry_data["metric_id"] = metric_id
    entry = MetricEntry(**entry_data)
    session.add(entry)
    session.commit()
    session.refresh(entry)
    return entry


@router.get("/{metric_id}/entries", response_model=List[MetricEntryRead])
def list_entries(
    metric_id: int,
    start: Optional[date] = Query(default=None),
    end: Optional[date] = Query(default=None),
    session: Session = Depends(get_session),
) -> List[MetricEntry]:
    metric = session.get(MetricDefinition, metric_id)
    if not metric:
        raise HTTPException(status_code=404, detail="Indicateur non trouvé")

    statement = select(MetricEntry).where(MetricEntry.metric_id == metric_id)
    if start:
        statement = statement.where(MetricEntry.period_start >= start)
    if end:
        statement = statement.where(MetricEntry.period_end <= end)
    statement = statement.order_by(MetricEntry.period_end.desc())
    return session.exec(statement).all()


@router.get("/dashboard/snapshot", response_model=DashboardSnapshot)
def dashboard_snapshot(session: Session = Depends(get_session)) -> DashboardSnapshot:
    total_sources = session.exec(select(func.count(DataSource.id))).one()
    total_metrics = session.exec(select(func.count(MetricDefinition.id))).one()
    total_entries = session.exec(select(func.count(MetricEntry.id))).one()
    total_kpis = session.exec(select(func.count(KPI.id))).one()
    active_reports = session.exec(
        select(func.count(Report.id)).where(Report.status != ReportStatus.ARCHIVED)
    ).one()

    def extract(value: int | tuple[int]) -> int:
        if isinstance(value, tuple):
            return int(value[0])
        return int(value or 0)

    return DashboardSnapshot(
        total_sources=extract(total_sources),
        total_metrics=extract(total_metrics),
        total_entries=extract(total_entries),
        total_kpis=extract(total_kpis),
        active_reports=extract(active_reports),
    )
