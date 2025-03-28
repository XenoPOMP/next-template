import { render, screen } from '@testing-library/react';

import { useTrackedState } from '@/hooks';

/** */
function UseTrackedStateTest() {
  const [state, updateState] = useTrackedState(1);

  return (
    <>
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
export function createUseTrackedStateTest() {
  const res = render(<UseTrackedStateTest />);

  /** */
  const getCurrentState = () => {
    const output = screen.getByTestId('output');
    return output.getAttribute('data-output');
  };

  return {
    renderResult: res,
    getCurrentState,
  };
}
