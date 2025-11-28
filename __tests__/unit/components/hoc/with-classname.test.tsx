import { cleanup, render, screen } from '@testing-library/react';
import cn from 'classnames';
import { afterEach, describe, expect, test } from 'vitest';
import type { VariableFC } from 'xenopomp-essentials';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { withClassname } from '@/components/hoc';

// eslint-disable-next-line jsdoc/require-jsdoc
const Comp: VariableFC<'div'> = ({ className, children, ...props }) => (
  <div
    className={cn(className)}
    data-testid='CLASS_CONTAINER'
    {...props}
  >
    {children}
  </div>
);

const WithClass = withClassname(Comp, 'CLASS_WITH_NAME');

describe('withClassname hoc', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    assertRendering(<WithClass />);
  });

  test('Class is applying statically', () => {
    render(<WithClass className={cn('my_class story')} />);
    const classContainer =
      screen.getByTestId<HTMLDivElement>('CLASS_CONTAINER');

    expect(Array.from(classContainer.classList)).toIncludeSameMembers([
      'my_class',
      'story',
      'CLASS_WITH_NAME',
    ]);
  });
});
