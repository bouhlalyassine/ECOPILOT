import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ScenarioForm } from '@/components/forms/ScenarioForm';
import { getDashboardSummary } from '@/services/dashboard';

export default async function ScenariosPage({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(`/${params.locale}/login`);
  }

  const [scenarios, summaryBaseline, activeScenario] = await Promise.all([
    prisma.scenario.findMany({
      where: { organizationId: session.user.organizationId },
      include: { reductions: true },
      orderBy: { createdAt: 'desc' }
    }),
    getDashboardSummary({ organizationId: session.user.organizationId }),
    prisma.scenario.findFirst({ where: { organizationId: session.user.organizationId, active: true } })
  ]);

  const simulatedSummary = activeScenario
    ? await getDashboardSummary({ organizationId: session.user.organizationId, scenarioId: activeScenario.id })
    : summaryBaseline;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Scénarios de décarbonation</h1>
      <ScenarioForm />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Baseline</h2>
          <p className="text-sm text-gray-500">Énergie: {summaryBaseline.kpis.energyTotalBaseline.toFixed(2)} kWh</p>
          <p className="text-sm text-gray-500">tCO2e: {summaryBaseline.kpis.co2eBaseline.toFixed(2)}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Simulé ({activeScenario?.name ?? 'aucun actif'})</h2>
          <p className="text-sm text-gray-500">Énergie: {simulatedSummary.kpis.energyTotalSimulated.toFixed(2)} kWh</p>
          <p className="text-sm text-gray-500">tCO2e: {simulatedSummary.kpis.co2eSimulated.toFixed(2)}</p>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Campagne</th>
              <th className="px-4 py-2 text-left">Actif</th>
              <th className="px-4 py-2 text-left">Réductions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {scenarios.map((scenario) => (
              <tr key={scenario.id}>
                <td className="px-4 py-2">{scenario.name}</td>
                <td className="px-4 py-2">{scenario.applyFromCampaign}</td>
                <td className="px-4 py-2">{scenario.active ? 'Oui' : 'Non'}</td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    {scenario.reductions.map((reduction) => (
                      <li key={reduction.id}>
                        {reduction.module} - {reduction.filterField}={reduction.filterValue} :{' '}
                        {reduction.reductionType === 'percentage'
                          ? `${Number(reduction.reductionValue) * 100}%`
                          : `${Number(reduction.reductionValue)}`} réduction
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
