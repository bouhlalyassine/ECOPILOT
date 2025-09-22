import { prisma } from '@/lib/prisma';
import { computeCampaign } from '@/lib/campaign';
import {
  applyScenarioReductions,
  ScenarioDefinition,
  ScenarioRecordInput,
  ScenarioRecordResult
} from '@/lib/scenario';

interface DashboardFilters {
  organizationId: string;
  startDate?: Date;
  endDate?: Date;
  scenarioId?: string;
}

interface KpiSummary {
  energyTotalBaseline: number;
  energyTotalSimulated: number;
  waterTotal: number;
  wasteTotalBaseline: number;
  wasteTotalSimulated: number;
  co2eBaseline: number;
  co2eSimulated: number;
  productionKg: number;
  productionHa: number;
  intensityCo2PerTonne: number;
  intensityEnergyPerTonne: number;
}

export interface ChartEntry {
  label: string;
  baseline: number;
  simulated: number;
}

export interface MonthlyEntry {
  month: string;
  energyBaseline: number;
  energySimulated: number;
  wasteBaseline: number;
  wasteSimulated: number;
}

export interface DashboardSummary {
  kpis: KpiSummary;
  energyByType: ChartEntry[];
  wasteByCategory: ChartEntry[];
  monthlySeries: MonthlyEntry[];
}

function findMatchingFactor(
  factors: { sourceType: string; unit: string; kgco2ePerUnit: number; validFrom: Date | null; validTo: Date | null }[],
  identifier: { key: string; value: string },
  unit: string,
  date: Date
) {
  return factors.find((factor) => {
    const isUnitMatch = factor.unit === unit;
    const isTypeMatch = factor.sourceType === identifier.value;
    const isValidFrom = !factor.validFrom || factor.validFrom <= date;
    const isValidTo = !factor.validTo || factor.validTo >= date;
    return isUnitMatch && isTypeMatch && isValidFrom && isValidTo;
  });
}

async function getScenario(
  organizationId: string,
  scenarioId?: string
): Promise<ScenarioDefinition | null> {
  const scenario = scenarioId
    ? await prisma.scenario.findUnique({
        where: { id: scenarioId },
        include: { reductions: true }
      })
    : await prisma.scenario.findFirst({
        where: { organizationId, active: true },
        orderBy: { createdAt: 'desc' },
        include: { reductions: true }
      });

  if (!scenario) {
    return null;
  }

  return {
    id: scenario.id,
    organizationId: scenario.organizationId,
    name: scenario.name,
    description: scenario.description,
    applyFromCampaign: scenario.applyFromCampaign,
    active: scenario.active,
    reductions: scenario.reductions.map((reduction) => ({
      id: reduction.id,
      module: reduction.module,
      siteId: reduction.siteId,
      filterField: reduction.filterField,
      filterValue: reduction.filterValue,
      reductionType: reduction.reductionType,
      reductionValue: Number(reduction.reductionValue)
    }))
  };
}

export async function getDashboardSummary({
  organizationId,
  startDate,
  endDate,
  scenarioId
}: DashboardFilters): Promise<DashboardSummary> {
  const organization = await prisma.organization.findUnique({ where: { id: organizationId } });
  const startMonth =
    (organization?.settings as { campaignStartMonth?: number } | null)?.campaignStartMonth ?? 9;

  const dateFilter = startDate || endDate ? { gte: startDate, lte: endDate } : undefined;

  const [energyRecords, wasteRecords, waterRecords, productionRecords, emissionFactors, scenario] =
    await Promise.all([
      prisma.energyRecord.findMany({
        where: {
          site: { organizationId },
          ...(dateFilter && {
            period: dateFilter
          })
        },
        include: { site: true }
      }),
      prisma.wasteRecord.findMany({
        where: {
          site: { organizationId },
          ...(dateFilter && {
            period: dateFilter
          })
        },
        include: { site: true }
      }),
      prisma.waterRecord.findMany({
        where: {
          site: { organizationId },
          ...(dateFilter && { period: dateFilter })
        },
        include: { site: true }
      }),
      prisma.productionRecord.findMany({
        where: {
          site: { organizationId },
          ...(dateFilter && { period: dateFilter })
        },
        include: { site: true }
      }),
      prisma.emissionFactor.findMany({ where: { organizationId } }),
      getScenario(organizationId, scenarioId)
    ]);

  const scenarioDefinition: ScenarioDefinition =
    scenario ?? ({
      id: 'baseline',
      organizationId,
      name: 'Baseline',
      applyFromCampaign: '00/01',
      active: false,
      reductions: []
    } as ScenarioDefinition);

  const energyScenarioInputs: ScenarioRecordInput[] = energyRecords.map((record) => ({
    id: record.id,
    module: 'energy',
    siteId: record.siteId,
    year: record.year,
    month: record.month,
    startMonth,
    value: Number(record.value),
    attributes: {
      type: record.type,
      unit: record.unit ?? ''
    }
  }));

  const wasteScenarioInputs: ScenarioRecordInput[] = wasteRecords.map((record) => ({
    id: record.id,
    module: 'waste',
    siteId: record.siteId,
    year: record.year,
    month: record.month,
    startMonth,
    value: Number(record.value),
    attributes: {
      categorie: record.categorie,
      unit: record.unit ?? ''
    }
  }));

  const energyScenarioResults = applyScenarioReductions(energyScenarioInputs, scenarioDefinition);
  const wasteScenarioResults = applyScenarioReductions(wasteScenarioInputs, scenarioDefinition);

  const energyById = new Map<string, ScenarioRecordResult>(
    energyScenarioResults.map((result) => [result.id, result])
  );
  const wasteById = new Map<string, ScenarioRecordResult>(
    wasteScenarioResults.map((result) => [result.id, result])
  );

  let energyTotalBaseline = 0;
  let energyTotalSimulated = 0;
  let wasteTotalBaseline = 0;
  let wasteTotalSimulated = 0;
  let co2eBaseline = 0;
  let co2eSimulated = 0;
  let waterTotal = 0;
  let productionKg = 0;
  let productionHa = 0;

  const energyByType = new Map<string, { baseline: number; simulated: number }>();
  const wasteByCategory = new Map<string, { baseline: number; simulated: number }>();
  const monthlyAggregate = new Map<
    string,
    { energyBaseline: number; energySimulated: number; wasteBaseline: number; wasteSimulated: number }
  >();

  const energyFactors = emissionFactors.filter((factor) => factor.module === 'energy');
  const wasteFactors = emissionFactors.filter((factor) => factor.module === 'waste');

  for (const record of energyRecords) {
    const scenarioResult = energyById.get(record.id);
    const baselineValue = Number(record.value);
    const simulatedValue = scenarioResult?.simulatedValue ?? baselineValue;

    energyTotalBaseline += baselineValue;
    energyTotalSimulated += simulatedValue;

    const recordType = record.type ?? 'Autre';
    const aggregated = energyByType.get(recordType) ?? { baseline: 0, simulated: 0 };
    aggregated.baseline += baselineValue;
    aggregated.simulated += simulatedValue;
    energyByType.set(recordType, aggregated);

    const campaign = computeCampaign(record.year, record.month, startMonth);
    const monthly =
      monthlyAggregate.get(campaign) ??
      { energyBaseline: 0, energySimulated: 0, wasteBaseline: 0, wasteSimulated: 0 };
    monthly.energyBaseline += baselineValue;
    monthly.energySimulated += simulatedValue;
    monthlyAggregate.set(campaign, monthly);

    const factor = findMatchingFactor(
      energyFactors.map((factor) => ({
        sourceType: factor.sourceType,
        unit: factor.unit,
        kgco2ePerUnit: Number(factor.kgco2ePerUnit),
        validFrom: factor.validFrom,
        validTo: factor.validTo
      })),
      { key: 'type', value: record.type ?? '' },
      record.unit ?? '',
      new Date(record.year, record.month - 1, 1)
    );

    if (factor) {
      co2eBaseline += baselineValue * factor.kgco2ePerUnit;
      co2eSimulated += simulatedValue * factor.kgco2ePerUnit;
    }
  }

  for (const record of wasteRecords) {
    const scenarioResult = wasteById.get(record.id);
    const baselineValue = Number(record.value);
    const simulatedValue = scenarioResult?.simulatedValue ?? baselineValue;

    wasteTotalBaseline += baselineValue;
    wasteTotalSimulated += simulatedValue;

    const category = record.categorie ?? 'Autre';
    const aggregated = wasteByCategory.get(category) ?? { baseline: 0, simulated: 0 };
    aggregated.baseline += baselineValue;
    aggregated.simulated += simulatedValue;
    wasteByCategory.set(category, aggregated);

    const campaign = computeCampaign(record.year, record.month, startMonth);
    const monthly =
      monthlyAggregate.get(campaign) ??
      { energyBaseline: 0, energySimulated: 0, wasteBaseline: 0, wasteSimulated: 0 };
    monthly.wasteBaseline += baselineValue;
    monthly.wasteSimulated += simulatedValue;
    monthlyAggregate.set(campaign, monthly);

    const factor = findMatchingFactor(
      wasteFactors.map((factor) => ({
        sourceType: factor.sourceType,
        unit: factor.unit,
        kgco2ePerUnit: Number(factor.kgco2ePerUnit),
        validFrom: factor.validFrom,
        validTo: factor.validTo
      })),
      { key: 'categorie', value: record.categorie ?? '' },
      record.unit ?? '',
      new Date(record.year, record.month - 1, 1)
    );

    if (factor) {
      co2eBaseline += baselineValue * factor.kgco2ePerUnit;
      co2eSimulated += simulatedValue * factor.kgco2ePerUnit;
    }
  }

  for (const record of waterRecords) {
    waterTotal += Number(record.eau_m3 ?? 0);
  }

  for (const record of productionRecords) {
    productionKg += Number(record.prod_kg ?? 0);
    productionHa += Number(record.sup_ha ?? 0);
  }

  const productionTonnes = productionKg / 1000;
  const intensityCo2PerTonne = productionTonnes > 0 ? co2eSimulated / productionTonnes : 0;
  const intensityEnergyPerTonne = productionTonnes > 0 ? energyTotalSimulated / productionTonnes : 0;

  const monthlySeries: MonthlyEntry[] = Array.from(monthlyAggregate.entries())
    .sort(([campaignA], [campaignB]) => (campaignA > campaignB ? 1 : -1))
    .map(([campaign, values]) => ({
      month: campaign,
      energyBaseline: values.energyBaseline,
      energySimulated: values.energySimulated,
      wasteBaseline: values.wasteBaseline,
      wasteSimulated: values.wasteSimulated
    }));

  return {
    kpis: {
      energyTotalBaseline,
      energyTotalSimulated,
      waterTotal,
      wasteTotalBaseline,
      wasteTotalSimulated,
      co2eBaseline,
      co2eSimulated,
      productionKg,
      productionHa,
      intensityCo2PerTonne,
      intensityEnergyPerTonne
    },
    energyByType: Array.from(energyByType.entries()).map(([type, values]) => ({
      label: type,
      baseline: values.baseline,
      simulated: values.simulated
    })),
    wasteByCategory: Array.from(wasteByCategory.entries()).map(([category, values]) => ({
      label: category,
      baseline: values.baseline,
      simulated: values.simulated
    })),
    monthlySeries
  };
}
