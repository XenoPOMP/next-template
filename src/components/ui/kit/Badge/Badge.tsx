import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import uiStyles from '@/components/ui/kit/UIKit.module.scss';

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
      className={cn(
        uiStyles.uiField,
        uiStyles.withBg,
        'text-16',
        badgeVariants({ variant }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
