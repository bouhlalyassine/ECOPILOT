"""Script de peuplement de la base pour faciliter les tests manuels."""

from datetime import date

from .database import init_db, session_scope
from .models import (
    DataCategory,
    DataSource,
    KPI,
    MetricDefinition,
    MetricEntry,
    Report,
    ReportSection,
)


def run() -> None:
    init_db()
    with session_scope() as session:
        if session.query(DataSource).count():
            return

        source_energy = DataSource(
            name="Factures énergétiques",
            description="Données issues des factures d'électricité",
            category=DataCategory.ENVIRONMENT,
            frequency="Mensuelle",
            contact="energie@entreprise.com",
        )
        source_hr = DataSource(
            name="SIRH",
            description="Suivi des indicateurs RH",
            category=DataCategory.SOCIAL,
            frequency="Mensuelle",
            contact="rh@entreprise.com",
        )
        session.add_all([source_energy, source_hr])
        session.flush()

        metric_energy = MetricDefinition(
            name="Consommation électrique",
            description="Consommation totale d'électricité (MWh)",
            category=DataCategory.ENVIRONMENT,
            unit="MWh",
            calculation_method="Somme des consommations mensuelles",
            data_source_id=source_energy.id,
        )
        metric_absenteeism = MetricDefinition(
            name="Taux d'absentéisme",
            description="Nombre de jours d'absence / Nombre de jours travaillés",
            category=DataCategory.SOCIAL,
            unit="%",
            calculation_method="(Absences / Présence) * 100",
            data_source_id=source_hr.id,
        )
        session.add_all([metric_energy, metric_absenteeism])
        session.flush()

        session.add_all(
            [
                MetricEntry(
                    metric_id=metric_energy.id,
                    period_start=date(2023, 1, 1),
                    period_end=date(2023, 1, 31),
                    value=1250.0,
                ),
                MetricEntry(
                    metric_id=metric_energy.id,
                    period_start=date(2023, 2, 1),
                    period_end=date(2023, 2, 28),
                    value=1180.0,
                ),
                MetricEntry(
                    metric_id=metric_energy.id,
                    period_start=date(2023, 3, 1),
                    period_end=date(2023, 3, 31),
                    value=1110.0,
                ),
                MetricEntry(
                    metric_id=metric_absenteeism.id,
                    period_start=date(2023, 1, 1),
                    period_end=date(2023, 1, 31),
                    value=4.5,
                ),
                MetricEntry(
                    metric_id=metric_absenteeism.id,
                    period_start=date(2023, 2, 1),
                    period_end=date(2023, 2, 28),
                    value=4.2,
                ),
            ]
        )

        kpi_energy = KPI(
            name="Réduction consommation électrique",
            description="Objectif de -5% sur la consommation",
            metric_id=metric_energy.id,
            target_value=1100.0,
            unit="MWh",
        )
        kpi_absenteeism = KPI(
            name="Maîtrise de l'absentéisme",
            description="Maintenir le taux sous 4%",
            metric_id=metric_absenteeism.id,
            target_value=4.0,
            unit="%",
        )
        session.add_all([kpi_energy, kpi_absenteeism])
        session.flush()

        report = Report(
            title="Reporting T1 2023",
            period_start=date(2023, 1, 1),
            period_end=date(2023, 3, 31),
            summary="Suivi des indicateurs clés du premier trimestre",
        )
        session.add(report)
        session.flush()

        session.add_all(
            [
                ReportSection(
                    report_id=report.id,
                    metric_id=metric_energy.id,
                    actual_value=1110.0,
                    target_value=1100.0,
                    variance=10.0,
                    trend="baisse",
                    analysis="Valeur la plus récente : 1110.0. Tendance : baisse",
                    recommendations="Poursuivre les actions d'efficacité énergétique",
                ),
                ReportSection(
                    report_id=report.id,
                    metric_id=metric_absenteeism.id,
                    actual_value=4.2,
                    target_value=4.0,
                    variance=0.2,
                    trend="baisse",
                    analysis="Valeur la plus récente : 4.2. Tendance : baisse",
                    recommendations="Renforcer la prévention des risques psychosociaux",
                ),
            ]
        )


if __name__ == "__main__":
    run()
