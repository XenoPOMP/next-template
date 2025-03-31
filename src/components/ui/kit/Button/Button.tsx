import cn from 'classnames';

import { slotable } from '@/components/hoc';
import uiStyles from '@/components/ui/kit/UIKit.module.scss';

import type { ButtonProps } from './Button.props';
import { buttonVariants } from './Button.variants';

export const Button = slotable<'button', ButtonProps>(
  'button',
  ({ Comp, className, variant, ...props }) => (
    <Comp
      className={cn(uiStyles.uiField, buttonVariants({ variant }), className)}
      {...props}
    />
  ),
);
