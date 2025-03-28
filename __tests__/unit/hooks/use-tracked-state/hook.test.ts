import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

import { useTrackedState } from '@/hooks';

import { assertHookRendering, spyOnConsole } from '@test/assets';

describe('useTrackedState', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => useTrackedState(12));
  });

  test('Callback should not be running before mount', () => {
    const { expectToBeNotCalled, spyLog } = spyOnConsole(
      '<HOOK_UPDATE_DETECTED>',
    );

    renderHook(() =>
      useTrackedState(12, () => {
        // This log have to be called only on second mount.
        // If spy detects log, it means that error is occurred.
        spyLog();
      }),
    );

    expectToBeNotCalled();
  });

  test('Certain callback is called on mount', () => {});
});
