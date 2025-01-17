import { afterAll, describe, expect, test } from 'vitest';

import { clearMocks, mockEnv } from '@/__tests__/assets/mocks';
import { TESTING } from '@/app/constants/node-env';
import { env } from '@/src/utils/env';

describe('env with zod schema tests', () => {
  afterAll(() => {
    clearMocks();
  });

  test('Default canonical url is set', () => {
    expect(env.CANONICAL_URL).toBe('http://localhost:3000');
  });

  test('Default production mode is set', () => {
    expect(env.NODE_ENV).toBe(TESTING);
  });

  test('Mocking is not affecting NODE_ENV', () => {
    mockEnv({
      NODE_ENV: 'someThingElse',
    });

    expect(env.NODE_ENV).toBe(TESTING);

    clearMocks();
  });
});
