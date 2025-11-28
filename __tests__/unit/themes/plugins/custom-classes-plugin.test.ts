import { describe, test } from 'vitest';
import { assertNotThrowing } from 'xenopomp-essentials/vitest';

import { CustomClassesPlugin } from '@/themes/plugins';

import { twApiMock } from '@test/assets';

describe('CustomClassesPlugin test', () => {
  test('It works', () => {
    assertNotThrowing(() => CustomClassesPlugin());
    assertNotThrowing(() => CustomClassesPlugin().handler(twApiMock));
  });
});
