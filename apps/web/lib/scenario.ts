import { computeCampaign } from './campaign';

export type ModuleKey = 'energy' | 'waste';

export interface ScenarioReductionRule {
  id: string;
  module: ModuleKey;
  siteId?: string | null;
  filterField: string;
  filterValue: string;
  reductionType: 'percentage' | 'absolute';
  reductionValue: number;
}

export interface ScenarioDefinition {
  id: string;
  organizationId: string;
  name: string;
  description?: string | null;
  applyFromCampaign: string;
  active: boolean;
  reductions: ScenarioReductionRule[];
}

export interface ScenarioRecordInput {
  id: string;
  module: ModuleKey;
  siteId?: string | null;
  year: number;
  month: number;
  startMonth: number;
  value: number;
  attributes: Record<string, string | number | null>;
}

export interface ScenarioRecordResult extends ScenarioRecordInput {
  campaign: string;
  baselineValue: number;
  simulatedValue: number;
  appliedReductions: string[];
}

function parseCampaign(label: string): number {
  const [start] = label.split('/');
  const numeric = Number.parseInt(start, 10);
  if (Number.isNaN(numeric)) {
    throw new Error(`Invalid campaign label: ${label}`);
  }

  return numeric;
}

export function applyScenarioReductions(
  records: ScenarioRecordInput[],
  scenario: ScenarioDefinition
): ScenarioRecordResult[] {
  if (!scenario.active) {
    return records.map((record) => {
      const campaign = computeCampaign(record.year, record.month, record.startMonth);
      return {
        ...record,
        campaign,
        baselineValue: record.value,
        simulatedValue: record.value,
        appliedReductions: []
      };
    });
  }

  const applyFromCampaignValue = parseCampaign(scenario.applyFromCampaign);

  return records.map((record) => {
    const campaign = computeCampaign(record.year, record.month, record.startMonth);
    const recordCampaignValue = parseCampaign(campaign);

    let simulatedValue = record.value;
    const appliedReductions: string[] = [];

    if (recordCampaignValue >= applyFromCampaignValue) {
      for (const reduction of scenario.reductions) {
        if (reduction.module !== record.module) continue;
        if (reduction.siteId && reduction.siteId !== record.siteId) continue;
        const attribute = record.attributes[reduction.filterField];
        if (attribute === undefined || attribute === null) continue;
        if (String(attribute) !== reduction.filterValue) continue;

        if (reduction.reductionType === 'percentage') {
          simulatedValue = simulatedValue * (1 - Number(reduction.reductionValue));
        } else {
          simulatedValue = Math.max(simulatedValue - Number(reduction.reductionValue), 0);
        }

        appliedReductions.push(reduction.id);
      }
    }

    return {
      ...record,
      campaign,
      baselineValue: record.value,
      simulatedValue,
      appliedReductions
    };
  });
}
