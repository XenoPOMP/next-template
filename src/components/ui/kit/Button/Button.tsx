import cn from 'classnames';

import { slotable } from '@/src/components/hoc';
import { buttonVariants } from '@/src/components/ui/kit/Button/Button.variants.ts';

import type { ButtonProps } from './Button.props';

export const Button = slotable<'button', ButtonProps>(
  'button',
  ({ Comp, className, variant, ...props }) => (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  ),
);
