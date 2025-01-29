import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { useRace } from '@/hooks';

import { assertNotThrowing, expectHookToRender } from '@test/assets';

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
      useRace('race', undefined, {
        raceResolveCondition: _ => false,
      }),
    );

    assertNotThrowing(() => {
      hook.unmount();
    });
  });
});
