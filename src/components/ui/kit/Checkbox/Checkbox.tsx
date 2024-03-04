import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import type { CheckboxProps } from './Checkbox.props';

const Checkbox: VariableFC<'input', CheckboxProps, 'type'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <input type={'checkbox'} className={cn(className)} {...props}>
      {children}
    </input>
  );
};

export default Checkbox;
