import { afterAll, describe, expect, test } from 'vitest';

import { clearMocks, mockEnv } from '@/__tests__/assets/mocks';
import { env } from '@/src/utils/env';

describe('env with zod schema tests', () => {
  afterAll(() => {
    clearMocks();
  });

  test('Default canonical url is set', () => {
    expect(env.CANONICAL_URL).toBe('http://localhost:3000');
  });

  test('Default production mode is set', () => {
    expect(env.NEXT_PUBLIC_PRODUCTION_MODE).toBe('dev');
  });

  test('Production mode is parsed only with allowed values', () => {
    mockEnv({
      NEXT_PUBLIC_PRODUCTION_MODE: 'someThingElse',
    });

    expect(env.NEXT_PUBLIC_PRODUCTION_MODE).toBe('dev');

    clearMocks();
  });
});
