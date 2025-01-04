import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { twApiMock } from '@/__tests__/assets/mocks';
import { CustomClassesPlugin } from '@/src/styles/themes/plugins';

describe('CustomClassesPlugin test', () => {
  test('It works', () => {
    assertNotThrowing(() => CustomClassesPlugin());
    assertNotThrowing(() => CustomClassesPlugin().handler(twApiMock));
  });
});
