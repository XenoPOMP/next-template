import cn from 'classnames';
import type { FcProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';

import type { ButtonProps } from './Button.props';

export const Button = slotable<
  'button',
  ButtonProps & FcProps<VariableFC<'button'>>
>('button', ({ Comp, className, ...props }) => (
  <Comp
    className={cn(className)}
    {...props}
  />
));
