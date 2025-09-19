from __future__ import annotations

from datetime import date, datetime
from enum import Enum
from typing import List, Optional

from sqlmodel import Field, Relationship, SQLModel


class DataCategory(str, Enum):
    ENVIRONMENT = "Environment"
    SOCIAL = "Social"
    GOVERNANCE = "Governance"


class Direction(str, Enum):
    INCREASE = "increase"
    DECREASE = "decrease"


class DataSourceBase(SQLModel):
    name: str
    description: Optional[str] = None
    category: Optional[DataCategory] = None
    frequency: Optional[str] = None
    contact: Optional[str] = None


class DataSource(DataSourceBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    metrics: List["MetricDefinition"] = Relationship(back_populates="data_source")


class DataSourceCreate(DataSourceBase):
    pass


class DataSourceRead(DataSourceBase):
    id: int


class DataSourceUpdate(SQLModel):
    name: Optional[str] = None
    description: Optional[str] = None
    category: Optional[DataCategory] = None
    frequency: Optional[str] = None
    contact: Optional[str] = None


class MetricDefinitionBase(SQLModel):
    name: str
    description: Optional[str] = None
    category: DataCategory
    unit: str
    calculation_method: Optional[str] = None
    data_source_id: Optional[int] = Field(default=None, foreign_key="datasource.id")


class MetricDefinition(MetricDefinitionBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    data_source: Optional[DataSource] = Relationship(back_populates="metrics")
    entries: List["MetricEntry"] = Relationship(back_populates="metric")
    kpis: List["KPI"] = Relationship(back_populates="metric")
    report_sections: List["ReportSection"] = Relationship(back_populates="metric")


class MetricDefinitionCreate(MetricDefinitionBase):
    pass


class MetricDefinitionRead(MetricDefinitionBase):
    id: int


class MetricDefinitionUpdate(SQLModel):
    name: Optional[str] = None
    description: Optional[str] = None
    category: Optional[DataCategory] = None
    unit: Optional[str] = None
    calculation_method: Optional[str] = None
    data_source_id: Optional[int] = None


class MetricEntryBase(SQLModel):
    period_start: date
    period_end: date
    value: float


class MetricEntry(MetricEntryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    metric_id: int = Field(foreign_key="metricdefinition.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)

    metric: MetricDefinition = Relationship(back_populates="entries")


class MetricEntryCreate(MetricEntryBase):
    metric_id: Optional[int] = None


class MetricEntryRead(MetricEntryBase):
    id: int
    metric_id: int
    created_at: datetime


class KPIBase(SQLModel):
    name: str
    description: Optional[str] = None
    metric_id: Optional[int] = Field(default=None, foreign_key="metricdefinition.id")
    target_value: Optional[float] = None
    unit: Optional[str] = None
    direction: Direction = Direction.DECREASE


class KPI(KPIBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    metric: Optional[MetricDefinition] = Relationship(back_populates="kpis")


class KPICreate(KPIBase):
    pass


class KPIRead(KPIBase):
    id: int


class KPIUpdate(SQLModel):
    name: Optional[str] = None
    description: Optional[str] = None
    metric_id: Optional[int] = None
    target_value: Optional[float] = None
    unit: Optional[str] = None
    direction: Optional[Direction] = None


class ReportStatus(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"
    ARCHIVED = "archived"


class ReportBase(SQLModel):
    title: str
    period_start: date
    period_end: date
    status: ReportStatus = ReportStatus.DRAFT
    summary: Optional[str] = None


class Report(ReportBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    sections: List["ReportSection"] = Relationship(back_populates="report")


class ReportCreate(ReportBase):
    metric_ids: Optional[List[int]] = None


class ReportUpdate(SQLModel):
    title: Optional[str] = None
    period_start: Optional[date] = None
    period_end: Optional[date] = None
    status: Optional[ReportStatus] = None
    summary: Optional[str] = None


class ReportRead(ReportBase):
    id: int
    created_at: datetime


class ReportSectionBase(SQLModel):
    report_id: int = Field(foreign_key="report.id")
    metric_id: Optional[int] = Field(default=None, foreign_key="metricdefinition.id")
    actual_value: Optional[float] = None
    target_value: Optional[float] = None
    variance: Optional[float] = None
    trend: Optional[str] = None
    analysis: Optional[str] = None
    recommendations: Optional[str] = None


class ReportSection(ReportSectionBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    report: Report = Relationship(back_populates="sections")
    metric: Optional[MetricDefinition] = Relationship(back_populates="report_sections")


class ReportSectionRead(ReportSectionBase):
    id: int


class DashboardSnapshot(SQLModel):
    total_sources: int
    total_metrics: int
    total_entries: int
    total_kpis: int
    active_reports: int
