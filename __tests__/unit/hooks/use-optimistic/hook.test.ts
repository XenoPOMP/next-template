import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { useOptimistic } from '@/hooks';

import { assertHookRendering, createUseSusTest } from '@test/assets';

describe('useOptimistic', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => useOptimistic());
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUseSusTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});
