import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import {
  assertHookRendering,
  createUseOptimisticMutationTest,
  injectMatchMediaMock,
} from '@test/assets';

describe('useOptimisticMutation', () => {
  injectMatchMediaMock();

  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => 1);
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUseOptimisticMutationTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});
