import { configDefaults } from 'vitest/config';

export const vitestExclusions: string[] = [
  // Default exclusions
  ...configDefaults.exclude,

  // Libraries & frameworks
  '**/.next',

  // Storybook
  '.storybook',
  '**/*.stories.{ts,tsx}',
  '**/SB_Preview_*.tsx',
  '**/SB_Preview*.tsx',
  'storybook-static',

  // Testing artifacts
  '__tests__/**/Test*.tsx',
  'app/test',

  // Testing artifacts
  './coverage',
  './app/test',
  '__tests__/{e2e,assets}',

  // Resource configs
  '.config/{.dev,helpers}',
  '.config/.*rc.js',
  '.config/.*rc',

  // Ignore configs
  '**/{next,postcss,tailwind}.config.{ts,js}',
  'mdx-components.tsx',

  './src/components/ui/DesignSystem/*',

  // Serwist
  './{app,public}/sw*',
  './public/swe-worker*',
];
