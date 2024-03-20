import { vi } from 'vitest';

/**
 * Mocks .env file.
 */
export const mockEnv = () => {
  vi.stubEnv('CANONICAL_URL', 'http://localhost:400');
  vi.stubEnv('IS_PRODUCTION', 'false');
};
