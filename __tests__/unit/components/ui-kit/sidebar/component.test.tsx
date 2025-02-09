import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

import { Sidebar } from '@/components/ui/kit';

import { assertNotThrowing, assertRendering } from '@test/assets';

describe('Sidebar component', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    assertRendering(<Sidebar />);
  });

  test('Sidebar can be opened', () => {
    render(<Sidebar />);
    const openIcon = screen.getByTestId('sidebar-open-icon');
    assertNotThrowing(() => {
      fireEvent.click(openIcon);
    });
  });
});
