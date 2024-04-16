import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { type FC } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { useHydratedStore } from '@/src/zustand/hooks';
import { useSettingsStore } from '@/src/zustand/stores';

const TestComponent: FC<{}> = () => {
  const {
    state: { lang, changeLang },
    isLoading,
  } = useHydratedStore(useSettingsStore, state => state);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>Hydrated!</p>

          <p data-testid={'output'}>{lang}</p>

          <button
            data-testid={'change-lang-to-ru'}
            onClick={() => changeLang('ru')}
          >
            Ru
          </button>

          <button
            data-testid={'change-lang-to-en'}
            onClick={() => changeLang('en')}
          >
            En
          </button>
        </div>
      )}
    </>
  );
};

describe('useHydratedStore hook', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    expectToRender(<TestComponent />);
  });

  test('You can invoke methods', async () => {
    render(<TestComponent />);
    await waitFor(() => screen.getAllByText('Hydrated!'));

    const output = screen.getByTestId('output');

    // Click RU button
    fireEvent.click(screen.getByTestId('change-lang-to-ru'));
    expect(output.textContent).toBe('ru');

    // Click EN button
    fireEvent.click(screen.getByTestId('change-lang-to-en'));
    expect(output.textContent).toBe('en');
  });
});
