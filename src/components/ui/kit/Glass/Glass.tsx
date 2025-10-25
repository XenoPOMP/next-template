import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';

import type { GlassProps } from './Glass.props';

type Props = FCProps<VariableFC<'div', unknown>> & GlassProps;

/**
 * Makes container that blurs backdrop.
 */
export const Glass = slotable<'div', Props>(
  'div',
  ({ Comp, className, style, children, blur = 8, ...props }) => {
    return (
      <Comp
        className={cn('bg-opacity-25', 'backdrop-blur', className)}
        style={{
          '--tw-backdrop-blur': `blur(${blur}px)`,
          ...style,
        }}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
