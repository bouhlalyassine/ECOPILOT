import { computeCampaign } from '@/lib/campaign';

describe('computeCampaign', () => {
  it('calculates campaign before start month as previous year', () => {
    expect(computeCampaign(2024, 8, 9)).toBe('23/24');
  });

  it('calculates campaign on start month as current year', () => {
    expect(computeCampaign(2024, 9, 9)).toBe('24/25');
  });

  it('calculates next year correctly', () => {
    expect(computeCampaign(2025, 8, 9)).toBe('24/25');
  });

  it('throws on invalid month', () => {
    expect(() => computeCampaign(2024, 13, 9)).toThrow('Month must be between 1 and 12');
  });
});
