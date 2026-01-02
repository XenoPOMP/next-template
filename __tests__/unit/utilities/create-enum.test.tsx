import { describe, expect, test } from 'vitest';
import { assertNotThrowing } from 'xenopomp-essentials/vitest';

import { createEnum } from '@/utils/misc';

describe('createEnum util', () => {
  test('It renders', () => {
    assertNotThrowing(() => {
      createEnum('first');
    });
  });

  test('Enum is creating properly', () => {
    expect(createEnum('first', 'second')).toStrictEqual({
      first: 'first',
      second: 'second',
    });
  });
});
