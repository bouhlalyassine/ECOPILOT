import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/apps/web/$1',
    '^@/i18n/(.*)$': '<rootDir>/i18n/$1'
  },
  testMatch: ['<rootDir>/tests/**/*.test.ts']
};

export default config;
