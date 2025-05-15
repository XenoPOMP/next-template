import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { SplitView } from '@/components/ui/kit';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Internal_ListItem: VariableFC<typeof SplitView> = ({
  className,
  children,
  ...props
}) => {
  return (
    <li className={cn()}>
      <SplitView
        className={cn(className)}
        {...props}
      >
        {children}
      </SplitView>
    </li>
  );
};
