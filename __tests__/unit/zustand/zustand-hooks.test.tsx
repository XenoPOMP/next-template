import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { clickAll } from '@/__tests__/assets/utilities/clickAll';
import useZustand from '@/src/zustand/hooks/useZustand';
import useAppStore from '@/src/zustand/stores/useAppStore';

const TestComponent = () => {
  const state = useZustand(useAppStore, state => state);

  return (
    <div>
      {!state?._hasHydrated ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{state!.mode}</p>
        </>
      )}

      <button
        onClick={() => {
          state!.toggleTheme();
        }}
      >
        Toggle mode
      </button>
    </div>
  );
};

describe('Zustand hooks', () => {
  test('useZustand', () => {
    expectToRender(<TestComponent />);
  });

  test('useAppStore', () => {
    render(<TestComponent />);

    const buttonToClick = screen.getAllByText('Toggle mode');

    clickAll(buttonToClick);
    clickAll(buttonToClick);
  });
});
