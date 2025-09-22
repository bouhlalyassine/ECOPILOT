export function computeCampaign(year: number, month: number, startMonth: number): string {
  if (month < 1 || month > 12) {
    throw new Error('Month must be between 1 and 12');
  }

  const startYear = month >= startMonth ? year : year - 1;
  const endYear = startYear + 1;

  const startSuffix = String(startYear).slice(-2);
  const endSuffix = String(endYear).slice(-2);

  return `${startSuffix}/${endSuffix}`;
}
