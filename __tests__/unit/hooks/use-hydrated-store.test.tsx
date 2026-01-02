import { cleanup, render } from '@testing-library/react';
import { useEffect } from 'react';
import { afterEach, describe, test } from 'vitest';
import type { Fn } from 'xenopomp-essentials';
import { assertHookRendering, spyFactory } from 'xenopomp-essentials/vitest';

import { createStorageKey } from '@/utils/misc';
import { useHydratedStore } from '@/zustand';
import { createPersistentStore } from '@/zustand/utils';

const testStore = createPersistentStore(() => ({ data: '' }), {
  name: createStorageKey('test', 'store'),
});

// eslint-disable-next-line jsdoc/require-jsdoc
const Comp = ({ action }: { action: Fn<[], void> }) => {
  const [_, isLoading] = useHydratedStore(testStore, s => s);

  useEffect(() => {
    // Run action on load
    if (!isLoading) {
      action();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return <></>;
};

describe('useHydratedStore hook', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    assertHookRendering(() => useHydratedStore(testStore, s => s));
  });

  test('Persisting works', () => {
    const { callSpy, expectToBeCalled } = spyFactory('useHydratedStore');

    const message = '<REHYDRATION_HAPPENED>';
    // eslint-disable-next-line jsdoc/require-jsdoc
    const spyLog = () => callSpy(message);

    render(<Comp action={() => spyLog()} />);
    expectToBeCalled(message);
  });
});
