import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps, ComponentRef, FC } from 'react';
import { useRef } from 'react';

import { useEffectAfterMount, useTrackedState } from '@/hooks';

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

  const inputRef = useRef<ComponentRef<'input'>>(null);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleClick: ComponentProps<'input'>['onClick'] = () => {
    updateState(
      inputRef.current?.getAttribute('data-input-string')?.toString(),
    );
  };

  return (
    <>
      <input
        data-testid='input'
        data-input-string=''
        ref={inputRef}
        onClick={handleClick}
      />

      <div
        data-testid='output'
        data-output={state}
      >
        <></>
      </div>
    </>
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
export function createTestingComponent<TestProps>() {
  return ({
    children,
    trackedState,
    onStateChange,
    ...props
  }: ComponentProps<typeof TestComponent> & {
    children?: FC<TestProps>;
  } & TestProps) => {
    const res = render(
      <>
        <TestComponent
          trackedState={trackedState}
          onStateChange={onStateChange}
        />
        {children?.(props as TestProps)}
      </>,
    );

    // eslint-disable-next-line jsdoc/require-jsdoc
    const getCurrentState = () => {
      const output = screen.getByTestId('output');
      return output.getAttribute('data-output');
    };

    // eslint-disable-next-line jsdoc/require-jsdoc
    const updateState = (newValue: string | undefined) => {
      const input = screen.getByTestId<HTMLInputElement>('input');
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
