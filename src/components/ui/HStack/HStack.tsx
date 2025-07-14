import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';
import type { StackRelativeProps } from '@/components/ui/VStack/StackRelative.props.ts';

type HStackProps = FCProps<VariableFC<'div'>>;

export const HStack = slotable<'div', HStackProps & StackRelativeProps>(
  'div',
  ({ Comp, className, children, style, spacing = '1.2rem', ...props }) => (
    <Comp
      className={cn('flex', className)}
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
