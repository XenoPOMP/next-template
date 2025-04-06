import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import {
  createUseOptimisticMutationTest,
  injectMatchMediaMock,
} from '@test/assets';

describe('useOptimisticMutation', () => {
  injectMatchMediaMock();

  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    const { getCurrentState } = createUseOptimisticMutationTest({
      trackedState: '12',
    });

    expect(getCurrentState('history-output')).toBe('[]');
  });
});
