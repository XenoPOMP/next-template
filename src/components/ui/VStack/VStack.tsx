import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';

type VStackProps = FCProps<VariableFC<'div'>>;

export const VStack = slotable<'div', VStackProps>(
  'div',
  ({ Comp, className, children, ...props }) => (
    <Comp
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  ),
);
