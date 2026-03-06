import react from '@vitejs/plugin-react';
import type { PartialDeep } from 'type-fest';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import { vitestExclusions } from '../.config/helpers/test-exclude';
import type { env } from '../src/utils/env';

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
    env: {
      NEXT_PUBLIC_CANONICAL_URL: 'http://localhost:3000',
    } satisfies PartialDeep<typeof env>,
  },
  define: mode === 'test' ? {} : { global: 'window' },
}));
