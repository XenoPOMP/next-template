import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { RQProvider } from '@/components/providers';
import { useLinkedMutation } from '@/hooks';

import { assertNotThrowing, expectHookToRender } from '@test/assets';

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
