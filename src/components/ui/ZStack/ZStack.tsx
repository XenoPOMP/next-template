import cn from 'classnames';
import type { FcProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';

import styles from './ZStack.module.scss';

type BaseComp = 'div';
type Props = FcProps<VariableFC<BaseComp>>;

export const ZStack = slotable<BaseComp, Props>(
  'div',
  ({ Comp, className, ...props }) => (
    <Comp
      className={cn(styles.zStack, className)}
      {...props}
    />
  ),
);
