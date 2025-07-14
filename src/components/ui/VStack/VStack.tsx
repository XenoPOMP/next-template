import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';
import type { StackRelativeProps } from '@/components/ui/VStack/StackRelative.props.ts';

type VStackProps = FCProps<VariableFC<'div'>>;

export const VStack = slotable<'div', VStackProps & StackRelativeProps>(
  'div',
  ({ Comp, className, children, style, spacing = '1.2rem', ...props }) => (
    <Comp
      className={cn('flex flex-col', className)}
      style={{
        gap: spacing,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  ),
);
