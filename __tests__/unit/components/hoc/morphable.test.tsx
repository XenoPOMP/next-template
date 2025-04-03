import { cleanup, render } from '@testing-library/react';
import cn from 'classnames';
import type { ElementType } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { morphable } from '@/components/hoc';

import { assertRendering } from '@test/assets';

describe('morphable hoc', () => {
  // eslint-disable-next-line jsdoc/require-jsdoc
  function renderAs(as: Extract<ElementType<{ className?: any }>, string>) {
    const Comp = morphable<'kbd', 'className'>('kbd');
    const { container } = render(<Comp as={as} />);
    return container.querySelector(as);
  }

  afterEach(() => cleanup());

  test('It renders', () => {
    const Comp = morphable<'kbd', 'className'>('kbd');
    assertRendering(<Comp />);
  });

  test.each<Extract<ElementType, string>>(['track', 'div', 'abbr'])(
    'Morph to <$0>',
    tag => {
      const rendered = renderAs(tag);
      expect(rendered).not.toBeNull();
    },
  );

  test.each<Extract<ElementType, string>>(['track', 'div', 'abbr'])(
    'Morph to <$0> with wrapper',
    tag => {
      const Component = morphable<'kbd', 'className'>(
        'kbd',
        ({ Comp, className, ...props }) => (
          <Comp
            className={cn(className)}
            {...props}
          />
        ),
      );
    },
  );
});
