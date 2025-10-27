import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { usePlatform } from '@/hooks';

import {
  assertHookRendering,
  createUsePlatformTest,
  injectMatchMediaMock,
} from '@test/assets';

describe('usePlatform', () => {
  injectMatchMediaMock();

  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => usePlatform());
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUsePlatformTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });

  test('It parses user agent', () => {
    const hook = renderHook(() => usePlatform());
    expect(hook.result.current.kind).toBe('desktop');
  });
});
