import { renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { useTrackedState } from '@/hooks';

import { assertHookRendering } from '@test/assets';

describe('useTrackedState', () => {
  test('It renders', () => {
    assertHookRendering(() => useTrackedState(12));
  });

  test('Callback should not be running before mount', () => {
    const spy = vi.spyOn(console, 'log');

    renderHook(() =>
      useTrackedState(12, updated => {
        // eslint-disable-next-line no-console
        console.log(`Hook mount detected: ${updated}`);
      }),
    );

    expect(spy).not.toHaveBeenCalled();
  });
});
