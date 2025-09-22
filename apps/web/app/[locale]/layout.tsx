import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
