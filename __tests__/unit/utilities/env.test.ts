import { describe, expect, test } from 'vitest';

import { env } from '@/src/utils/env';

describe('env with zod schema tests', () => {
  test('Default canonical url is set', () => {
    expect(env.CANONICAL_URL).toBe('http://localhost:3000');
  });
});
