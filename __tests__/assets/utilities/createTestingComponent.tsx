import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps, FC } from 'react';

import { Providers } from '@/components/layout';
import { useEffectAfterMount, useTrackedState } from '@/hooks';

import { TestUI } from '@test/assets';

// eslint-disable-next-line jsdoc/require-jsdoc
function TestComponent({
  trackedState,
  onStateChange,
}: {
  trackedState?: string;
  onStateChange?: (state: string | undefined) => void;
}) {
  const [state, updateState] = useTrackedState(trackedState, u => {
    updateState(u);
  });

  useEffectAfterMount(() => {
    onStateChange?.(state);
  }, [state]);

  return (
    <TestUI>
      <TestUI.Input updateState={updateState} />
      <TestUI.Output output={state} />
    </TestUI>
  );
}

/**
 * Helper function for creating vitest components for testing UI, hooks etc.
 *
 * @example Creating testing component
 * import { createTestingComponent } from '@test/assets';
 *
 * export const createUseTrackedStateTest = createTestingComponent();
 *
 * @example Using created component
 * test('Mount callback is called only after initial mount', () => {
 *   const { spyLog, expectToBeCalled } = spyOnConsole(
 *     '<MOUNT_EFFECT_CALLED_ON_USE_TRACKED_STATE>',
 *   );
 *
 *   const { updateState } = createUseTrackedStateTest({
 *     onStateChange: spyLog,
 *   });
 *   updateState('20');
 *
 *   expectToBeCalled();
 * });
 */
export function createTestingComponent(DefaultUI?: FC) {
  return ({
    trackedState,
    onStateChange,
  }: ComponentProps<typeof TestComponent>) => {
    const res = render(
      <>
        <TestComponent
          trackedState={trackedState}
          onStateChange={onStateChange}
        />

        {!!DefaultUI && <DefaultUI />}
      </>,
      {
        wrapper: Providers,
      },
    );

    // eslint-disable-next-line jsdoc/require-jsdoc
    const getCurrentState = (from?: string) => {
      const output = screen.getByTestId(from ?? 'output');
      return output.getAttribute('data-output');
    };

    // eslint-disable-next-line jsdoc/require-jsdoc
    const updateState = (
      newValue: string | undefined,
      options?: { to?: string },
    ) => {
      const target = options?.to ?? 'input';
      const input = screen.getByTestId<HTMLInputElement>(target);
      input.setAttribute('data-input-string', newValue ?? '');
      fireEvent.click(input);
    };

    return {
      renderResult: res,
      getCurrentState,
      updateState,
    };
  };
}
