'use client';

import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { assertHookRendering } from 'xenopomp-essentials/vitest';

import { useUniqueId } from '@/hooks';

describe('useUniqueId hook', () => {
  test('Not throwing errors', () => {
    assertHookRendering(() => useUniqueId());
    assertHookRendering(() => useUniqueId(t => `gen-${t}`));
  });

  test('Templating works', () => {
    const hook = renderHook(() => useUniqueId(t => `generated-${t}`));
    expect(hook.result.current.startsWith('generated-')).toBe(true);
  });
});
