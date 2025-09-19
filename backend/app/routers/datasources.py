from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from ..database import get_session
from ..models import (
    DataSource,
    DataSourceCreate,
    DataSourceRead,
    DataSourceUpdate,
)

router = APIRouter()


@router.post("/", response_model=DataSourceRead, status_code=201)
def create_source(
    payload: DataSourceCreate, session: Session = Depends(get_session)
) -> DataSource:
    source = DataSource.model_validate(payload)
    session.add(source)
    session.commit()
    session.refresh(source)
    return source


@router.get("/", response_model=List[DataSourceRead])
def list_sources(session: Session = Depends(get_session)) -> List[DataSource]:
    statement = select(DataSource).order_by(DataSource.name)
    return session.exec(statement).all()


@router.get("/{source_id}", response_model=DataSourceRead)
def get_source(source_id: int, session: Session = Depends(get_session)) -> DataSource:
    source = session.get(DataSource, source_id)
    if not source:
        raise HTTPException(status_code=404, detail="Source non trouvée")
    return source


@router.patch("/{source_id}", response_model=DataSourceRead)
def update_source(
    source_id: int,
    payload: DataSourceUpdate,
    session: Session = Depends(get_session),
) -> DataSource:
    source = session.get(DataSource, source_id)
    if not source:
        raise HTTPException(status_code=404, detail="Source non trouvée")

    update_data = payload.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(source, field, value)

    session.add(source)
    session.commit()
    session.refresh(source)
    return source


@router.delete("/{source_id}", status_code=204)
def delete_source(source_id: int, session: Session = Depends(get_session)) -> None:
    source = session.get(DataSource, source_id)
    if not source:
        raise HTTPException(status_code=404, detail="Source non trouvée")

    session.delete(source)
    session.commit()
