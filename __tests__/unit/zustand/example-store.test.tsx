import { describe, test } from 'vitest';

import { DEFAULT_SELECTOR, useExampleStore } from '@/zustand';

import { expectHookToRender } from '@test/assets';

describe('useExampleStore hook', () => {
  test('It renders', () => {
    expectHookToRender(() => useExampleStore(DEFAULT_SELECTOR));
  });
});
