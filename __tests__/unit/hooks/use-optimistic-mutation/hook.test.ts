import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import {
  assertNotThrowing,
  createUseOptimisticMutationTest,
  injectMatchMediaMock,
} from '@test/assets';

describe('useOptimisticMutation', () => {
  injectMatchMediaMock();

  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    const { getCurrentState, clickButton } = createUseOptimisticMutationTest({
      trackedState: '12',
    });

    clickButton('delete-item');
    expect(getCurrentState('history-output')).toBe('[]');
  });

  test('Errors are handled', () => {
    const { clickButton } = createUseOptimisticMutationTest({
      trackedState: '12',
    });

    assertNotThrowing(() => clickButton('delete-item-that-throws'));
  });

  test('Settling of optimistic mutation is supported', () => {
    const { clickButton } = createUseOptimisticMutationTest({
      trackedState: '12',
    });

    assertNotThrowing(() => clickButton('delete-item-that-awaits'));
  });
});
