import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

/**
 * Badge component for UI Kit.
 *
 * @constructor
 */
export const Badge: VariableFC<'div'> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
};
