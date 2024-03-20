import { vi } from 'vitest';

/**
 * Clear all mocks from Vitest.
 */
export const clearMocks = () => {
  vi.clearAllMocks();
  vi.resetAllMocks();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
};
