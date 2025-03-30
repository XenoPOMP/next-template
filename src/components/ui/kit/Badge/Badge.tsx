import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { type BadgeVariantsType, badgeVariants } from './Badge.variants.ts';

/**
 * Badge component for UI Kit.
 * @param children
 * @param className
 * @param variant
 * @param props
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
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
};
