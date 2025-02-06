import { describe, test } from 'vitest';

import { CustomClassesPlugin } from '@/styles/themes/plugins';

import { assertNotThrowing, twApiMock } from '@test/assets';

describe('CustomClassesPlugin test', () => {
  test('It works', () => {
    assertNotThrowing(() => CustomClassesPlugin());
    assertNotThrowing(() => CustomClassesPlugin().handler(twApiMock));
  });
});
