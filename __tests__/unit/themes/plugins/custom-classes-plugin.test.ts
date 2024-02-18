import { describe, expect, test } from 'vitest';

import { CustomClassesPlugin } from '@/src/styles/themes/plugins';

describe('CustomClassesPlugin test', () => {
  test('It works', () => {
    expect(() => CustomClassesPlugin()).not.toThrow();
  });
});
