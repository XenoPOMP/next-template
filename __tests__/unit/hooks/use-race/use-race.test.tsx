import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';
import {
  assertHookRendering,
  assertNotThrowing,
} from 'xenopomp-essentials/vitest';

import { useRace } from '@/hooks';

describe('useRace hook', () => {
  test('It renders', () => {
    assertHookRendering(() => useRace('race', async () => {}));
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
        // eslint-disable-next-line jsdoc/require-jsdoc
        raceResolveCondition: _ => false,
      }),
    );

    assertNotThrowing(() => {
      hook.unmount();
    });
  });
});
