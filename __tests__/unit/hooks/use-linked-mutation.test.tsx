import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { expectHookToRender } from '@/__tests__/assets/utilities';
import { RQProvider } from '@/src/components/providers';
import { useLinkedMutation } from '@/src/hooks';

describe('useLinkedMutation hook', () => {
  const sharedProps = [
    () =>
      useLinkedMutation(['profile'], {
        onSuccess() {},
        async mutationFn() {
          return 'ze english language';
        },
      }),
    {
      wrapper: RQProvider,
    },
  ] satisfies Parameters<typeof expectHookToRender>;

  test('It renders', () => {
    expectHookToRender(...sharedProps);
  });

  test('Mutation works', () => {
    const {
      result: { current },
    } = renderHook(...sharedProps);

    assertNotThrowing(() => {
      current.mutate();
    });
  });
});
