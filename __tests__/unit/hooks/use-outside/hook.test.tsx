import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentRef } from 'react';
import { describe, test } from 'vitest';
import {
  assertHookRendering,
  assertNotThrowing,
} from 'xenopomp-essentials/vitest';

import { useOutSide } from '@/hooks';

/**
 * Just a testing component that renders ref.
 * @constructor
 */
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
