import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { type BadgeVariantsType, badgeVariants } from './Badge.variants.ts';

export const Badge: VariableFC<'div', BadgeVariantsType> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div
      className={cn(
        'text-14 rounded-[.25em] px-[.35em] py-[.175em] font-mono leading-[normal]',
        badgeVariants({ variant }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
