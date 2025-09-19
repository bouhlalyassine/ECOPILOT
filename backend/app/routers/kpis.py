from statistics import mean
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from ..database import get_session
from ..models import (
    Direction,
    KPI,
    KPICreate,
    KPIRead,
    KPIUpdate,
    MetricDefinition,
    MetricEntry,
)

router = APIRouter()


def _latest_metric_values(metric_id: int, session: Session, limit: int = 3) -> List[float]:
    statement = (
        select(MetricEntry.value)
        .where(MetricEntry.metric_id == metric_id)
        .order_by(MetricEntry.period_end.desc())
        .limit(limit)
    )
    rows = session.exec(statement).all()
    return [row for row in rows if row is not None]


@router.post("/", response_model=KPIRead, status_code=201)
def create_kpi(payload: KPICreate, session: Session = Depends(get_session)) -> KPI:
    if payload.metric_id is not None and not session.get(MetricDefinition, payload.metric_id):
        raise HTTPException(status_code=404, detail="Indicateur associé introuvable")

    kpi = KPI.model_validate(payload)
    session.add(kpi)
    session.commit()
    session.refresh(kpi)
    return kpi


@router.get("/", response_model=List[KPIRead])
def list_kpis(session: Session = Depends(get_session)) -> List[KPI]:
    return session.exec(select(KPI).order_by(KPI.name)).all()


@router.get("/{kpi_id}", response_model=KPIRead)
def get_kpi(kpi_id: int, session: Session = Depends(get_session)) -> KPI:
    kpi = session.get(KPI, kpi_id)
    if not kpi:
        raise HTTPException(status_code=404, detail="KPI non trouvé")
    return kpi


@router.patch("/{kpi_id}", response_model=KPIRead)
def update_kpi(
    kpi_id: int,
    payload: KPIUpdate,
    session: Session = Depends(get_session),
) -> KPI:
    kpi = session.get(KPI, kpi_id)
    if not kpi:
        raise HTTPException(status_code=404, detail="KPI non trouvé")

    if payload.metric_id is not None and not session.get(MetricDefinition, payload.metric_id):
        raise HTTPException(status_code=404, detail="Indicateur associé introuvable")

    update_data = payload.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(kpi, field, value)

    session.add(kpi)
    session.commit()
    session.refresh(kpi)
    return kpi


@router.delete("/{kpi_id}", status_code=204)
def delete_kpi(kpi_id: int, session: Session = Depends(get_session)) -> None:
    kpi = session.get(KPI, kpi_id)
    if not kpi:
        raise HTTPException(status_code=404, detail="KPI non trouvé")
    session.delete(kpi)
    session.commit()


@router.get("/{kpi_id}/evaluation")
def evaluate_kpi(kpi_id: int, session: Session = Depends(get_session)) -> dict:
    kpi = session.get(KPI, kpi_id)
    if not kpi:
        raise HTTPException(status_code=404, detail="KPI non trouvé")

    if not kpi.metric_id:
        raise HTTPException(status_code=400, detail="Ce KPI n'est associé à aucun indicateur")

    values = _latest_metric_values(kpi.metric_id, session)
    latest_value: Optional[float] = values[0] if values else None
    average_value: Optional[float] = mean(values) if values else None

    variance = None
    status = "non défini"
    progress = None
    if latest_value is not None and kpi.target_value is not None:
        variance = latest_value - kpi.target_value
        if kpi.direction == Direction.DECREASE:
            status = "✅ objectif atteint" if latest_value <= kpi.target_value else "⚠️ au-dessus de la cible"
        else:
            status = "✅ objectif atteint" if latest_value >= kpi.target_value else "⚠️ en-dessous de la cible"
        if average_value not in (None, 0):
            progress = (latest_value / average_value) - 1 if average_value else None

    return {
        "kpi": kpi,
        "latest_value": latest_value,
        "average_value": average_value,
        "variance": variance,
        "progress": progress,
        "status": status,
    }
