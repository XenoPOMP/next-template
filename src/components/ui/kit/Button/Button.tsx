import cn from 'classnames';

import { slotable } from '@/components/hoc';

import type { ButtonProps } from './Button.props';
import { buttonVariants } from './Button.variants';

export const Button = slotable<'button', ButtonProps>(
  'button',
  ({ Comp, className, variant, ...props }) => (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  ),
);
