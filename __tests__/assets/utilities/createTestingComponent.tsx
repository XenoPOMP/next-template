import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps, ComponentRef, PropsWithChildren } from 'react';
import { useRef } from 'react';

import { useTrackedState } from '@/hooks';

// eslint-disable-next-line jsdoc/require-jsdoc
function TestComponent({ trackedState }: { trackedState?: unknown }) {
  // eslint-disable-next-line antfu/consistent-list-newline
  const [state, updateState] = useTrackedState(trackedState, u =>
    updateState(u),
  );
  const inputRef = useRef<ComponentRef<'input'>>(null);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleClick: ComponentProps<'input'>['onClick'] = () => {
    updateState(Number(inputRef.current?.getAttribute('data-input-string')));
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

// eslint-disable-next-line jsdoc/require-jsdoc
export function createTestingComponent() {
  return ({
    children,
    ...props
  }: PropsWithChildren & ComponentProps<typeof TestComponent>) => {
    const res = render(
      <>
        <TestComponent {...props} />
        {children}
      </>,
    );

    // eslint-disable-next-line jsdoc/require-jsdoc
    const getCurrentState = () => {
      const output = screen.getByTestId('output');
      return output.getAttribute('data-output');
    };

    // eslint-disable-next-line jsdoc/require-jsdoc
    const updateState = (newValue: number) => {
      const input = screen.getByTestId<HTMLInputElement>('input');
      input.setAttribute('data-input-string', newValue.toString());
      fireEvent.click(input);
    };

    return {
      renderResult: res,
      getCurrentState,
      updateState,
    };
  };
}
