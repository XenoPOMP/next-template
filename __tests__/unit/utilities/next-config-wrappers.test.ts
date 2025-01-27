import type { NextConfig } from 'next';
import { expectType } from 'tsd';
import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { testObject } from '@/__tests__/assets/utilities';
import { withWrappers } from '@/src/utils/next';

describe('withWrappers utility', () => {
  test('Object is not undefined', () => {
    testObject(withWrappers({}));
  });

  test('It does not throw', () => {
    assertNotThrowing(() => withWrappers({}));
  });

  test('Test return type', () => {
    expectType<(config: NextConfig) => NextConfig>(withWrappers);
  });
});
