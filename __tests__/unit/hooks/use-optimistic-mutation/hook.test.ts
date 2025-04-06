import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { useOptimisticMutation } from '@/hooks';

import {
  assertHookRendering,
  createUseOptimisticMutationTest,
} from '@test/assets';

describe('useOptimisticMutation', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => useOptimisticMutation());
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUseOptimisticMutationTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});
