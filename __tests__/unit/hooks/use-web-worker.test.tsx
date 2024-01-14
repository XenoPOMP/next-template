'use client';

import { render, screen } from '@testing-library/react';
import { FunctionPrimitive } from '@xenopomp/advanced-types';
import { FC, useEffect } from 'react';
import { Mock, describe, expect, test, vi } from 'vitest';

import { clickAll } from '@/__tests__/unit/utilities/clickAll';
import { useWebWorker } from '@/src/hooks/useWebWorker';

const UseWebWorkerTestComponent: FC<{}> = () => {
  const { result, isLoading, run, terminate } = useWebWorker(() => {
    return 1 + 1;
  });

  useEffect(() => {
    console.info({
      isLoading,
      result,
    });
  }, [isLoading]);

  return (
    <>
      <p>Result: {result}</p>
      <p>Is loading: {isLoading ? 'true' : 'false'}</p>

      <button
        onClick={() => {
          run();
        }}
      >
        Run job once again
      </button>

      <button
        onClick={() => {
          terminate();
        }}
      >
        Terminate
      </button>
    </>
  );
};

/** Mock URL object. */
window.URL.createObjectURL = vi.fn();
global.window.URL.createObjectURL = vi.fn();
vi.spyOn(window.URL, 'createObjectURL');

describe('useWebworker hook', () => {
  test('Not throwing errors', () => {
    expect(() => render(<UseWebWorkerTestComponent />)).not.toThrow();
  });

  test('Functions calls', () => {
    render(<UseWebWorkerTestComponent />);

    const runButtons =
      screen.getAllByText<HTMLButtonElement>(`Run job once again`);

    const terminateButtons =
      screen.getAllByText<HTMLButtonElement>(`Run job once again`);

    expect(() => {
      clickAll(runButtons);
    }).not.toThrow();

    expect(() => {
      clickAll(terminateButtons);
    }).not.toThrow();
  });
});
