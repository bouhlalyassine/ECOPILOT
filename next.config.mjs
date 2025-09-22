import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  }
};

export default withNextIntl(nextConfig);
