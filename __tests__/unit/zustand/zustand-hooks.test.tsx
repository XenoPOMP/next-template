import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { clickAll } from '@/__tests__/assets/utilities/clickAll';

const TestComponent = () => {
  return <div></div>;
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
