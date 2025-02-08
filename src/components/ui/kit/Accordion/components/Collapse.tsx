'use client';

import cn from 'classnames';
import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';
import type { Defined, VariableFC } from 'xenopomp-essentials';

import { Spacer } from '@/components/ui';

import { useAccordion } from '../accordion.context.ts';

export const AccordionCollapse: VariableFC<'div'> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const { setCollapsed, collapsed } = useAccordion();

  const handleClick = useCallback(
    (e: Parameters<Defined<typeof onClick>>[0]) => {
      setCollapsed(prev => !prev);
      onClick?.(e);
    },
    [onClick, setCollapsed],
  );

  return (
    <div
      className={cn(
        'flex cursor-pointer select-none items-center gap-[.5em]',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <Spacer />
      <ChevronDown
        size='1em'
        className={cn('transition-transform', {
          'rotate-180': collapsed,
        })}
      />
    </div>
  );
};
