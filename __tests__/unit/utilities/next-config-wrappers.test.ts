import type { NextConfig } from 'next';
import { expectType } from 'tsd';
import { describe, expect, test } from 'vitest';

import { withWrappers } from '@/utils/next';

import { assertNotThrowing } from '@test/assets';

describe('withWrappers utility', () => {
  test('Object is not undefined', () => {
    expect(withWrappers({})).toBeDefined();
  });

  test('It does not throw', () => {
    assertNotThrowing(() => withWrappers({}));
  });

  test('Test return type', () => {
    expectType<(config: NextConfig) => NextConfig>(withWrappers);
  });
});
