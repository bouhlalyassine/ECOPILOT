import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ReportGenerator } from '@/components/ReportGenerator';

export default async function ReportsPage({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(`/${params.locale}/login`);
  }

  const scenarios = await prisma.scenario.findMany({
    where: { organizationId: session.user.organizationId },
    orderBy: { name: 'asc' }
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Rapport RSE</h1>
      <p className="text-sm text-gray-500">
        Sélectionnez le format désiré et le scénario (optionnel) pour générer un rapport PDF ou DOCX.
      </p>
      <ReportGenerator scenarios={scenarios.map((scenario) => ({ id: scenario.id, name: scenario.name }))} />
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm text-sm text-gray-600">
        <h2 className="mb-2 text-lg font-semibold">Contenu par défaut</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Couverture et résumé des KPIs clés (énergie, eau, déchets, tCO2e, production).</li>
          <li>Comparaison Baseline vs Scénario actif.</li>
          <li>Sections narratives pré-remplies (Politique RSE, Périmètre, Synthèse).</li>
          <li>Export DOCX minimal pour personnalisation.</li>
        </ul>
      </div>
    </div>
  );
}
