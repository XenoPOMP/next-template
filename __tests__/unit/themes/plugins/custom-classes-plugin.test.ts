import { describe, test } from 'vitest';
import { assertNotThrowing, twApiMock } from 'xenopomp-essentials/vitest';

import { CustomClassesPlugin } from '@/themes/plugins';

describe('CustomClassesPlugin test', () => {
  test('It works', () => {
    assertNotThrowing(() => CustomClassesPlugin());
    assertNotThrowing(() => CustomClassesPlugin().handler(twApiMock));
  });
});
