'use client';

import { render, screen } from '@testing-library/react';
import { FC } from 'react';
import { describe, expect, test } from 'vitest';

import { clickAll } from '@/__tests__/assets/utilities/clickAll';
import useBoolean from '@/src/hooks/useBoolean';

const UseBooleanTestComponent: FC<{ initialValue?: boolean }> = ({
  initialValue,
}) => {
  const [localValue, toggleLocalValue, setLocalValue] = useBoolean(
    initialValue ?? false
  );

  const supportState = useBoolean();

  return (
    <>
      <h1>This is an component for testing useBoolean hook</h1>

      <div id={'value-preview'}>Enabled: {localValue ? 'true' : 'false'}</div>

      <button id={'value-toggler'} onClick={() => toggleLocalValue()}>
        Toggle value
      </button>

      <button id={'value-changer-to-true'} onClick={() => setLocalValue(true)}>
        Change to true
      </button>

      <button
        id={'value-changer-to-false'}
        onClick={() => setLocalValue(false)}
      >
        Change to false
      </button>
    </>
  );
};

describe('useBoolean hook', () => {
  /** Expect local state to be certain value. */
  const expectStateToBe = (state: boolean) => {
    expect(() =>
      screen.getAllByText(`Enabled: ${state ? 'true' : 'false'}`)
    ).not.toThrow();
  };

  test('Not throwing errors', () => {
    expect(() => render(<UseBooleanTestComponent />)).not.toThrow();
  });

  test('Not providing default value', () => {
    render(<UseBooleanTestComponent />);

    expectStateToBe(false);
  });

  test('Default value', () => {
    render(<UseBooleanTestComponent initialValue={false} />);

    expectStateToBe(false);
  });

  test('Toggle value', () => {
    render(<UseBooleanTestComponent initialValue={false} />);

    const buttons = screen.getAllByText<HTMLButtonElement>(`Toggle value`);

    clickAll(buttons);
    expectStateToBe(true);

    clickAll(buttons);
    expectStateToBe(false);
  });

  test('Change value', () => {
    render(<UseBooleanTestComponent initialValue={true} />);

    const changeToTrueButtons =
      screen.getAllByText<HTMLButtonElement>(`Change to true`);
    const changeToFalseButtons =
      screen.getAllByText<HTMLButtonElement>(`Change to false`);

    clickAll(changeToTrueButtons);
    expectStateToBe(true);

    clickAll(changeToFalseButtons);
    expectStateToBe(false);
  });
});
