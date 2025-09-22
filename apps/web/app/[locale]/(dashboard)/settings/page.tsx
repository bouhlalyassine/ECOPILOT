import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function SettingsPage({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(`/${params.locale}/login`);
  }

  const [organization, sites, users] = await Promise.all([
    prisma.organization.findUnique({ where: { id: session.user.organizationId } }),
    prisma.site.findMany({ where: { organizationId: session.user.organizationId }, orderBy: { name: 'asc' } }),
    prisma.user.findMany({ where: { organizationId: session.user.organizationId }, orderBy: { name: 'asc' } })
  ]);

  const settings = (organization?.settings as { campaignStartMonth?: number; defaultLocale?: string }) ?? {};

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Paramètres</h1>
      <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold">Organisation</h2>
        <p className="text-sm text-gray-600">{organization?.name}</p>
        <p className="text-sm text-gray-600">Mois de démarrage de campagne : {settings.campaignStartMonth ?? 9}</p>
        <p className="text-sm text-gray-600">Langue par défaut : {settings.defaultLocale ?? 'fr'}</p>
      </section>
      <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold">Sites ({sites.length})</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          {sites.map((site) => (
            <li key={site.id} className="rounded border border-gray-200 p-2 text-sm">
              <strong>{site.name}</strong>
              <div className="text-gray-500">{site.region ?? 'Région inconnue'}</div>
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold">Utilisateurs ({users.length})</h2>
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Rôle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
