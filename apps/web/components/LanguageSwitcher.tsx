'use client';

import { useRouter, usePathname } from 'next/navigation';
import { localeNames, locales, AppLocale } from '@/i18n/config';

export function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: AppLocale) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = newLocale;
    router.push(`/${segments.join('/')}`);
  };

  return (
    <select
      className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:bg-gray-700"
      value={locale}
      onChange={(event) => changeLocale(event.target.value as AppLocale)}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeNames[loc]}
        </option>
      ))}
    </select>
  );
}
