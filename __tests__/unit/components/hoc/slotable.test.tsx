import { cleanup, render } from '@testing-library/react';
import cn from 'classnames';
import type { ComponentProps } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { slotable } from '@/components/hoc';

import { assertRendering } from '@test/assets';

describe('slotable hoc', () => {
  const TARGET_CLASSNAME = '<target_classname>';

  const SlotComp = slotable<'div', ComponentProps<'div'>>(
    'div',
    ({ Comp, className, children, ...props }) => (
      <Comp
        className={cn(TARGET_CLASSNAME, className)}
        {...props}
      >
        {children}
      </Comp>
    ),
  );

  afterEach(() => cleanup());

  test('It renders', () => {
    assertRendering(<SlotComp />);
  });

  test('Slot props are merging with inline props', () => {
    const middleClassname = '<middle_classname>';
    const inlineClassname = '<inline_classname>';

    const { container } = render(
      <SlotComp
        asChild
        className={cn(middleClassname)}
      >
        <article className={cn(inlineClassname)}>This is slot</article>
      </SlotComp>,
    );

    // Rendered article should not be null
    const res = container.querySelector('article');
    expect(res).not.toBeNull();

    // Check if all classes are applied
    expect(res!.className).toBe(
      `${TARGET_CLASSNAME} ${middleClassname} ${inlineClassname}`,
    );
    expect(res!.classList).toContain(TARGET_CLASSNAME);
    expect(res!.classList).toContain(middleClassname);
    expect(res!.classList).toContain(inlineClassname);
  });
});
