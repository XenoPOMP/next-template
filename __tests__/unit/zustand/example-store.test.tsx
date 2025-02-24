import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useExampleStore } from '@/zustand';

import { assertHookRendering, assertNotThrowing } from '@test/assets';

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
