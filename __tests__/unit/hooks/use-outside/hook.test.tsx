import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentRef } from 'react';
import { describe, test } from 'vitest';

import { useOutSide } from '@/hooks';

import { assertHookRendering, assertNotThrowing } from '@test/assets';

function Testing() {
  const { ref } = useOutSide<ComponentRef<'div'>>();

  return (
    <div>
      <div data-testid='out'>Outside</div>
      <div ref={ref}>Ref</div>
    </div>
  );
}

describe('useOutside hook', () => {
  test('It renders', () => {
    assertHookRendering(() => useOutSide());
  });

  test('Outside click', () => {
    render(<Testing />);
    const outside = screen.getByTestId('out');
    assertNotThrowing(() => fireEvent.click(outside));
  });
});
