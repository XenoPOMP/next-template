import { renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { useEffectAfterMount } from '@/hooks';

import { assertHookRendering } from '@test/assets';

describe('useEffectAfterMount', () => {
  test('It renders', () => {
    assertHookRendering(() => useEffectAfterMount(() => {}));
  });

  test('It does not run initially', () => {
    const expectedWord = '<HOOK_CALLED_ON_MOUNT>';
    const spy = vi.spyOn(console, 'log');

    renderHook(() =>
      useEffectAfterMount(() => {
        // eslint-disable-next-line no-console
        console.log(expectedWord);
      }),
    );

    expect(spy).not.toHaveBeenCalledWith(expectedWord);
  });
});
