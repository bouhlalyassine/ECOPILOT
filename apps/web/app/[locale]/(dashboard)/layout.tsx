import { Sidebar } from '@/components/Sidebar';
import { Providers } from '@/components/Providers';
import { AppHeader } from '@/components/AppHeader';
import type { ReactNode } from 'react';

export default function DashboardLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <Providers>
      <div className="flex h-screen">
        <Sidebar locale={locale} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <AppHeader locale={locale} />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6 dark:bg-gray-950">
            <div className="mx-auto max-w-6xl space-y-6">{children}</div>
          </main>
        </div>
      </div>
    </Providers>
  );
}
