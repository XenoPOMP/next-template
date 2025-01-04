import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { expectHookToRender } from '@/__tests__/assets/utilities';
import { useRace } from '@/src/hooks';

describe('useRace hook', () => {
  test('It renders', () => {
    expectHookToRender(() => useRace('race', async () => {}));
  });

  test('Abort controller works', () => {
    const hook = renderHook(() => useRace('race', async () => {}));

    assertNotThrowing(() => {
      hook.unmount();
    });
  });

  test('Resolve condition works', () => {
    const hook = renderHook(() =>
      useRace('race', async () => {}, {
        raceResolveCondition: _ => false,
      }),
    );

    assertNotThrowing(() => {
      hook.unmount();
    });
  });
});
