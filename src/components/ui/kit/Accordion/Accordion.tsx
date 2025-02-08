'use client';

import cn from 'classnames';
import { useState } from 'react';
import { type VariableFC, jsxDotNotation } from 'xenopomp-essentials';

import { AccordionContext } from './accordion.context.ts';
import { AccordionBody, AccordionCollapse } from './components';

const InternalAccordion: VariableFC<'div', unknown> = ({
  className,
  children,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <AccordionContext value={{ collapsed, setCollapsed }}>
      <div
        data-collapsed={collapsed}
        className={cn('group', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext>
  );
};

/**
 * Component with collapsable content.
 *
 * @example
 * <>
 *  <Accordion className={cn('max-w-[500px]')}>
 *    <Accordion.Collapse>Collapse</Accordion.Collapse>
 *    <Accordion.Body>Body of collapsable accordion</Accordion.Body>
 *  </Accordion>
 * </>
 */
export const Accordion = jsxDotNotation(InternalAccordion, {
  Collapse: AccordionCollapse,
  Body: AccordionBody,
});
