export const defaultLocale = 'fr';
export const locales = ['fr', 'en'] as const;
export type AppLocale = (typeof locales)[number];

export const localeNames: Record<AppLocale, string> = {
  fr: 'Français',
  en: 'English'
};
