import { stubGlobal } from '@/__tests__/assets/utilities';

/**
 * Mocks .env file.
 */
export const mockEnv = () => {
  stubGlobal<typeof process.env>('process.env', {
    CANONICAL_URL: 'http://localhost:4000',
  });
};
