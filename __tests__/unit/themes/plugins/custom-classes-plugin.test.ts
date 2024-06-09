import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { CustomClassesPlugin } from '@/src/styles/themes/plugins';

describe('CustomClassesPlugin test', () => {
  test('It works', () => {
    assertNotThrowing(() => CustomClassesPlugin());
  });
});
