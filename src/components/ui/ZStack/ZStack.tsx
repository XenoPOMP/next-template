import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';

import styles from './ZStack.module.scss';

type Props = FCProps<VariableFC<'div'>>;

export const ZStack = slotable<Props>(
  'div',
  ({ Comp, className, ...props }) => (
    <Comp
      className={cn(styles.zStack, className)}
      {...props}
    />
  ),
);
