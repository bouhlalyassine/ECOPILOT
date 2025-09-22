import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { getDashboardSummary } from '@/services/dashboard';
import { KpiCard } from '@/components/KpiCard';
import { DashboardCharts } from '@/components/DashboardCharts';
import { getTranslations } from 'next-intl/server';

export default async function DashboardPage({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(`/${params.locale}/login`);
  }

  const t = await getTranslations('common');
  const summary = await getDashboardSummary({ organizationId: session.user.organizationId });

  const kpis = [
    { title: 'Énergie baseline (kWh)', value: summary.kpis.energyTotalBaseline.toFixed(1) },
    { title: 'Énergie simulée (kWh)', value: summary.kpis.energyTotalSimulated.toFixed(1) },
    { title: 'Eau totale (m³)', value: summary.kpis.waterTotal.toFixed(1) },
    { title: 'Déchets baseline (kg)', value: summary.kpis.wasteTotalBaseline.toFixed(1) },
    { title: 'tCO2e baseline', value: summary.kpis.co2eBaseline.toFixed(2) },
    { title: 'tCO2e simulé', value: summary.kpis.co2eSimulated.toFixed(2) },
    { title: 'Production (kg)', value: summary.kpis.productionKg.toFixed(1) },
    { title: 'Intensité tCO2e/tonne', value: summary.kpis.intensityCo2PerTonne.toFixed(2) }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t('mainKpis')}</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.title} title={kpi.title} value={kpi.value} />
        ))}
      </div>
      <DashboardCharts summary={summary} />
    </div>
  );
}
