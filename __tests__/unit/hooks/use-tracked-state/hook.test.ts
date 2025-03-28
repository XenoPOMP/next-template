import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { useTrackedState } from '@/hooks';

import {
  assertHookRendering,
  createUseTrackedStateTest,
  spyOnConsole,
} from '@test/assets';

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

  test('State works as state', () => {
    const { getCurrentState, updateState } = createUseTrackedStateTest({
      initialValue: 12,
    });

    // Default value
    expect(getCurrentState()).toBe('12');

    // State update
    updateState(156);
    expect(getCurrentState()).toBe('156');
  });

  test('Mount callback is called only after initial mount', () => {
    const { spyLog, expectToBeCalled } = spyOnConsole(
      '<MOUNT_EFFECT_CALLED_ON_USE_TRACKED_STATE>',
    );

    const { updateState } = createUseTrackedStateTest({
      callback: spyLog,
    });
    updateState(20);

    expectToBeCalled();
  });
});
