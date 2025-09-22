import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './apps/web/pages/**/*.{js,ts,jsx,tsx}',
    './apps/web/components/**/*.{js,ts,jsx,tsx}',
    './apps/web/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',
        success: '#43A047',
        warning: '#F4511E'
      }
    }
  },
  plugins: []
};

export default config;
