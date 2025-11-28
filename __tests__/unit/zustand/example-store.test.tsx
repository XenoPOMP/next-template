import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import {
  assertHookRendering,
  assertNotThrowing,
} from 'xenopomp-essentials/vitest';

import { useExampleStore } from '@/zustand';

describe('useExampleStore hook', () => {
  test('It renders', () => {
    assertHookRendering(() => useExampleStore());
  });

  test('Setter function works as expected', () => {
    const { result } = renderHook(() => useExampleStore(), {
      hydrate: true,
    });
    const { setText, text } = result.current;

    assertNotThrowing(() => setText('12'));
    expect(text).toBe('');
  });
});
