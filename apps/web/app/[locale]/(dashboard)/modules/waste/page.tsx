import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { WasteForm } from '@/components/forms/WasteForm';
import { computeCampaign } from '@/lib/campaign';

export default async function WasteModulePage({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(`/${params.locale}/login`);
  }

  const [records, sites, organization] = await Promise.all([
    prisma.wasteRecord.findMany({
      where: { site: { organizationId: session.user.organizationId } },
      include: { site: true, createdBy: true },
      orderBy: { period: 'desc' },
      take: 100
    }),
    prisma.site.findMany({ where: { organizationId: session.user.organizationId }, orderBy: { name: 'asc' } }),
    prisma.organization.findUnique({ where: { id: session.user.organizationId } })
  ]);

  const startMonth =
    (organization?.settings as { campaignStartMonth?: number } | null)?.campaignStartMonth ?? 9;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Déchets</h1>
      <WasteForm sites={sites.map((site) => ({ id: site.id, name: site.name }))} />
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Campagne</th>
              <th className="px-4 py-2 text-left">Site</th>
              <th className="px-4 py-2 text-left">Catégorie</th>
              <th className="px-4 py-2 text-left">Valeur</th>
              <th className="px-4 py-2 text-left">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {records.map((record) => (
              <tr key={record.id}>
                <td className="px-4 py-2">{computeCampaign(record.year, record.month, startMonth)}</td>
                <td className="px-4 py-2">{record.site.name}</td>
                <td className="px-4 py-2">{record.categorie}</td>
                <td className="px-4 py-2">{Number(record.value).toFixed(2)} {record.unit}</td>
                <td className="px-4 py-2">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
