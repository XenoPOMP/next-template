import { describe, expect, test } from 'vitest';

import { createEnum } from '@/utils/misc';

import { assertNotThrowing } from '@test/assets';

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
