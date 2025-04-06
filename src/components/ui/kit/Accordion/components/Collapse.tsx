import cn from 'classnames';
import { ChevronDown } from 'lucide-react';
import type { VariableFC } from 'xenopomp-essentials';

import { Spacer } from '@/components/ui';

/**
 * Collapse control element for Accordion.
 *
 * @constructor
 */
export const AccordionCollapse: VariableFC<'summary'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <summary
      className={cn(
        'flex cursor-pointer select-none items-center gap-[.5em]',
        className,
      )}
      {...props}
    >
      {children}
      <Spacer />
      <ChevronDown
        size='1em'
        className={cn('transition-transform group-open:rotate-180')}
      />
    </summary>
  );
};
