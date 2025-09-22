import { applyScenarioReductions, ScenarioDefinition, ScenarioRecordInput } from '@/lib/scenario';

describe('applyScenarioReductions', () => {
  const scenario: ScenarioDefinition = {
    id: 'scenario-test',
    organizationId: 'org',
    name: 'Réduction 24/25',
    applyFromCampaign: '24/25',
    active: true,
    reductions: [
      {
        id: 'red-energy',
        module: 'energy',
        filterField: 'type',
        filterValue: 'Electricite',
        reductionType: 'percentage',
        reductionValue: 0.1
      },
      {
        id: 'red-waste',
        module: 'waste',
        filterField: 'categorie',
        filterValue: 'Déchets organiques',
        reductionType: 'absolute',
        reductionValue: 50
      }
    ]
  };

  const baseRecords: ScenarioRecordInput[] = [
    {
      id: 'energy-202408',
      module: 'energy',
      siteId: 'site-a',
      year: 2024,
      month: 8,
      startMonth: 9,
      value: 1000,
      attributes: { type: 'Electricite' }
    },
    {
      id: 'energy-202409',
      module: 'energy',
      siteId: 'site-a',
      year: 2024,
      month: 9,
      startMonth: 9,
      value: 1000,
      attributes: { type: 'Electricite' }
    },
    {
      id: 'waste-202409',
      module: 'waste',
      siteId: 'site-b',
      year: 2024,
      month: 9,
      startMonth: 9,
      value: 200,
      attributes: { categorie: 'Déchets organiques' }
    }
  ];

  it('does not apply reductions before applyFromCampaign', () => {
    const results = applyScenarioReductions(baseRecords, scenario);
    const august = results.find((record) => record.id === 'energy-202408');
    expect(august?.simulatedValue).toBeCloseTo(1000);
  });

  it('applies percentage reduction from applyFromCampaign onwards', () => {
    const results = applyScenarioReductions(baseRecords, scenario);
    const septemberEnergy = results.find((record) => record.id === 'energy-202409');
    expect(septemberEnergy?.simulatedValue).toBeCloseTo(900); // 10% reduction
    expect(septemberEnergy?.appliedReductions).toContain('red-energy');
  });

  it('applies absolute reduction with floor at zero', () => {
    const results = applyScenarioReductions(baseRecords, scenario);
    const waste = results.find((record) => record.id === 'waste-202409');
    expect(waste?.simulatedValue).toBeCloseTo(150);
  });

  it('ignores scenario when inactive', () => {
    const inactiveScenario: ScenarioDefinition = { ...scenario, active: false };
    const results = applyScenarioReductions(baseRecords, inactiveScenario);
    expect(results.every((record) => record.simulatedValue === record.value)).toBe(true);
  });
});
