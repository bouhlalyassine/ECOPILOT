from fastapi import FastAPI

from .database import init_db
from .routers import datasources, kpis, metrics, reports

app = FastAPI(
    title="RSE Data Platform",
    description=(
        "API pour centraliser les données RSE, suivre les indicateurs et "
        "générer des rapports normalisés."
    ),
    version="0.1.0",
)


@app.on_event("startup")
def on_startup() -> None:
    init_db()


app.include_router(datasources.router, prefix="/sources", tags=["sources"])
app.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
app.include_router(kpis.router, prefix="/kpis", tags=["kpis"])
app.include_router(reports.router, prefix="/reports", tags=["reports"])


@app.get("/health", tags=["health"])
def health_check() -> dict[str, str]:
    return {"status": "ok"}
