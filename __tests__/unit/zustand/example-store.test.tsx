import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { DEFAULT_SELECTOR, useExampleStore } from '@/zustand';

import { assertHookRendering, assertNotThrowing } from '@test/assets';

describe('useExampleStore hook', () => {
  test('It renders', () => {
    assertHookRendering(() => useExampleStore(DEFAULT_SELECTOR));
  });

  test('Setter function works as expected', () => {
    const { result } = renderHook(() => useExampleStore(DEFAULT_SELECTOR), {
      hydrate: true,
    });
    const { setText, text } = result.current;

    assertNotThrowing(() => setText('12'));
    expect(text).toBe('');
  });
});
