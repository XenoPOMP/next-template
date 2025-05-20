import cn from 'classnames';
import type { ComponentProps } from 'react';

import { slotable } from '@/components/hoc';

/**
 * Global field component. Allows to share styles across all field-like
 * components.
 */
export const Field = slotable<'div', ComponentProps<'div'>>(
  'div',
  ({ Comp, className, children, ...props }) => (
    <Comp
      // TODO Make this actual field wrapper
      className={cn(
        'TODO',
        // Nullstyles
        'appearance-none bg-transparent text-primary-font placeholder:text-primary-font/60',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  ),
);
