import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import Pressable from '@/src/components/ui/Pressable/Pressable';

import { ButtonProps } from './Button.props';

const Button: VariableFC<typeof Pressable, ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Pressable className={cn(className)} {...props}>
      {children}
    </Pressable>
  );
};

export default Button;
