import react from '@vitejs/plugin-react';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPathsPlugin()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'json-summary', 'html'],
    },
    exclude: [
      // Default exclusions
      ...configDefaults.exclude,

      'cypress',
      'node_modules',
      'app/test',

      // Ignore configs
      'next.config.js',
      'postcss.config.js',
      'tailwind.config.ts',
    ],
  },
  define: mode === 'test' ? {} : { global: 'window' },
}));
