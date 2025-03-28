import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps, ComponentRef } from 'react';
import { useRef } from 'react';

import { useTrackedState } from '@/hooks';

interface TestProps {
  initialValue?: number;
  callback?: () => void;
}

/** */
function UseTrackedStateTest({ initialValue, callback }: TestProps) {
  const [state, updateState] = useTrackedState(initialValue ?? 1, callback);
  const inputRef = useRef<ComponentRef<'input'>>(null);

  /** */
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

/** */
export function createUseTrackedStateTest(props?: TestProps) {
  const res = render(<UseTrackedStateTest {...props} />);

  /** */
  const getCurrentState = () => {
    const output = screen.getByTestId('output');
    return output.getAttribute('data-output');
  };

  /** */
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
}
