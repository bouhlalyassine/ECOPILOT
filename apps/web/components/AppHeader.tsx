'use client';

import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function AppHeader({ locale }: { locale: string }) {
  const t = useTranslations('common');
  const { data } = useSession();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{t('welcome')}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{data?.user?.name ?? 'Utilisateur'}</p>
      </div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher locale={locale} />
        <ThemeToggle />
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: `/${locale}/login` })}
          className="rounded bg-primary px-3 py-1 text-sm font-medium text-white shadow"
        >
          {t('logout')}
        </button>
      </div>
    </header>
  );
}
