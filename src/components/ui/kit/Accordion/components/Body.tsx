'use client';

import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { useAccordion } from '../accordion.context.ts';

export const AccordionBody: VariableFC<'div'> = ({
  className,
  children,
  ...props
}) => {
  const { collapsed } = useAccordion();

  return (
    <>
      {collapsed && (
        <div
          className={cn(className)}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
};
