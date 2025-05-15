import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';
import { jsxDotNotation } from 'xenopomp-essentials';

import { Internal_ListItem } from './ListItem.tsx';

// eslint-disable-next-line jsdoc/require-jsdoc
const Internal_List: VariableFC<'ul'> = ({ className, children, ...props }) => {
  return (
    <ul
      className={cn(className)}
      {...props}
    >
      {children}
    </ul>
  );
};

export const List = jsxDotNotation(Internal_List, {
  Item: Internal_ListItem,
});
