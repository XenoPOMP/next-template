import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { useTrackedState } from '@/hooks';

import { assertHookRendering } from '@test/assets';

describe('useTrackedState', () => {
  test('It renders', () => {
    assertHookRendering(() => useTrackedState(12));
  });

  test('Callback should not be running before mount', () => {
    renderHook(() =>
      useTrackedState(12, updated => {
        // eslint-disable-next-line no-console
        console.log(`Hook mount detected: ${updated}`);
      }),
    );
  });
});
