import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { RQProvider } from '@/components/providers';
import { useLinkedMutation } from '@/hooks';

import { assertHookRendering, assertNotThrowing } from '@test/assets';

describe('useLinkedMutation hook', () => {
  const sharedProps = [
    () =>
      useLinkedMutation(['profile'], {
        // eslint-disable-next-line jsdoc/require-jsdoc
        onSuccess() {},
        // eslint-disable-next-line jsdoc/require-jsdoc
        async mutationFn() {
          return 'ze english language';
        },
      }),
    {
      wrapper: RQProvider,
    },
  ] satisfies Parameters<typeof assertHookRendering>;

  test('It renders', () => {
    assertHookRendering(...sharedProps);
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
