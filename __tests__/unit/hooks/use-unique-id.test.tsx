'use client';

import { describe, test } from 'vitest';

import { useUniqueId } from '@/hooks';

import { assertHookRendering } from '@test/assets';

describe('useUniqueId hook', () => {
  test('Not throwing errors', () => {
    assertHookRendering(() => useUniqueId());
    assertHookRendering(() => useUniqueId(t => `gen-${t}`));
  });
});
