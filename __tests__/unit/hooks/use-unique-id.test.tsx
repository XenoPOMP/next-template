'use client';

import { describe, test } from 'vitest';

import { useUniqueId } from '@/hooks';

import { expectHookToRender } from '@test/assets';

describe('useUniqueId hook', () => {
  test('Not throwing errors', () => {
    expectHookToRender(() => useUniqueId());
    expectHookToRender(() => useUniqueId(t => `gen-${t}`));
  });
});
