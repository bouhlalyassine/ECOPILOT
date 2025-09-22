'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface NavItem {
  href: string;
  label: string;
  icon?: ReactNode;
}

interface SidebarProps {
  locale: string;
}

export function Sidebar({ locale }: SidebarProps) {
  const pathname = usePathname();
  const t = useTranslations('common');

  const items: NavItem[] = [
    { href: `/${locale}/dashboard`, label: t('mainKpis') },
    { href: `/${locale}/modules/energy`, label: 'Énergie' },
    { href: `/${locale}/modules/water`, label: 'Eau' },
    { href: `/${locale}/modules/waste`, label: 'Déchets' },
    { href: `/${locale}/modules/social`, label: 'Social' },
    { href: `/${locale}/modules/production`, label: 'Production' },
    { href: `/${locale}/scenarios`, label: 'Scénarios' },
    { href: `/${locale}/reports`, label: t('rseReport') },
    { href: `/${locale}/settings`, label: t('settings') }
  ];

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="px-4 py-6 text-xl font-semibold">{t('appName')}</div>
      <nav className="flex-1 space-y-1 px-4">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded px-3 py-2 text-sm font-medium transition hover:bg-primary/10 ${
                active
                  ? 'bg-primary/10 text-primary-700 dark:text-primary-200'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
