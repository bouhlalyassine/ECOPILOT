from datetime import date

import pytest
from fastapi.testclient import TestClient
from sqlmodel import SQLModel, Session, create_engine

from app.database import get_session
from app.main import app


@pytest.fixture(name="engine")
def engine_fixture():
    engine = create_engine("sqlite://", connect_args={"check_same_thread": False})
    SQLModel.metadata.create_all(engine)
    return engine


@pytest.fixture(name="client")
def client_fixture(engine):
    def get_session_override():
        with Session(engine) as session:
            yield session

    app.dependency_overrides[get_session] = get_session_override
    with TestClient(app) as client:
        yield client
    app.dependency_overrides.clear()


def test_full_flow(client):
    source_payload = {
        "name": "Factures énergie",
        "description": "Données de consommation",
        "category": "Environment",
        "frequency": "Mensuelle",
        "contact": "energie@example.com",
    }
    response = client.post("/sources/", json=source_payload)
    assert response.status_code == 201, response.text
    source_id = response.json()["id"]

    metric_payload = {
        "name": "Consommation électrique",
        "description": "Somme des kWh",
        "category": "Environment",
        "unit": "MWh",
        "calculation_method": "Somme",
        "data_source_id": source_id,
    }
    response = client.post("/metrics/", json=metric_payload)
    assert response.status_code == 201, response.text
    metric_id = response.json()["id"]

    entry_payload = {
        "period_start": date(2024, 1, 1).isoformat(),
        "period_end": date(2024, 1, 31).isoformat(),
        "value": 950.0,
    }
    response = client.post(f"/metrics/{metric_id}/entries", json=entry_payload)
    assert response.status_code == 201, response.text

    kpi_payload = {
        "name": "Réduction conso",
        "description": "Maintenir sous 1000 MWh",
        "metric_id": metric_id,
        "target_value": 1000.0,
        "unit": "MWh",
        "direction": "decrease",
    }
    response = client.post("/kpis/", json=kpi_payload)
    assert response.status_code == 201, response.text
    kpi_id = response.json()["id"]

    response = client.get(f"/kpis/{kpi_id}/evaluation")
    assert response.status_code == 200
    evaluation = response.json()
    assert evaluation["latest_value"] == pytest.approx(950.0)

    report_payload = {
        "title": "Rapport janvier 2024",
        "period_start": date(2024, 1, 1).isoformat(),
        "period_end": date(2024, 1, 31).isoformat(),
        "metric_ids": [metric_id],
    }
    response = client.post("/reports/", json=report_payload)
    assert response.status_code == 201, response.text
    report_id = response.json()["id"]

    sections = client.get(f"/reports/{report_id}/sections").json()
    assert len(sections) == 1
    assert sections[0]["actual_value"] == pytest.approx(950.0)
    assert sections[0]["trend"] is None
