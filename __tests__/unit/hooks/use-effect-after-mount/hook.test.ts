import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { useEffectAfterMount } from '@/hooks';

import { assertHookRendering, spyFactory } from '@test/assets';

describe('useEffectAfterMount', () => {
  test('It renders', () => {
    assertHookRendering(() => useEffectAfterMount(() => {}));
  });

  test('It does not run initially', () => {
    // const { spyLog, expectToBeNotCalled } = spyOnConsole(
    //   '<HOOK_CALLED_ON_MOUNT>',
    // );

    const { callSpy, expectToBeNotCalled } = spyFactory('useEffectAfterMount');
    const args: any[] = [1, 2];

    renderHook(() =>
      useEffectAfterMount(() => {
        callSpy(...args);
      }),
    );
    expectToBeNotCalled(...args);
  });
});
