import react from '@vitejs/plugin-react';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPathsPlugin()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
  },
});
