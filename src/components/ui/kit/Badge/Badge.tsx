import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import type { BadgeVariantsType } from './Badge.variants.ts';
import { badgeVariants } from './Badge.variants.ts';

/**
 * Badge component for UI Kit.
 *
 * @constructor
 */
export const Badge: VariableFC<'div', BadgeVariantsType> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div
      className={cn('text-16', badgeVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
};
