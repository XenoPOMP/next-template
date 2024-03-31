import { vi } from 'vitest';

/**
 * Mocks .env file.
 *
 * @param additionalMocks  key-value record of env variables that also have to be mocked.
 */
export const mockEnv = (additionalMocks?: Record<string, string>) => {
  vi.stubEnv('CANONICAL_URL', 'http://localhost:4242');
  vi.stubEnv('IS_PRODUCTION', 'false');

  // Mock additional keys, if needed.
  if (additionalMocks) {
    Object.entries(additionalMocks).forEach(([key, value]) =>
      vi.stubEnv(key, value),
    );
  }
};
