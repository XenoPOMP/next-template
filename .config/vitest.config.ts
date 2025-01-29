import react from '@vitejs/plugin-react';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import { vitestExclusions } from '../.config/helpers/test-exclude';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPathsPlugin()],
  test: {
    environment: 'jsdom',
    exclude: vitestExclusions,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'json-summary', 'html'],
      exclude: [...vitestExclusions],
    },
    setupFiles: ['./__tests__/setup.vitest.ts'],
  },
  define: mode === 'test' ? {} : { global: 'window' },
}));
