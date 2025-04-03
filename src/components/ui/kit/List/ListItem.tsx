import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { SplitView } from '@/components/ui/kit';

import styles from './List.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Internal_ListItem: VariableFC<typeof SplitView> = ({
  className,
  children,
  ...props
}) => {
  return (
    <li className={cn(styles.item)}>
      <SplitView
        className={cn(styles.splitView, className)}
        {...props}
      >
        {children}
      </SplitView>
    </li>
  );
};
