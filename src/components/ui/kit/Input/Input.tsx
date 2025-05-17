import cn from 'classnames';
import { useCallback, useState } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

/**
 *
 */
export const Input: VariableFC<'input', unknown, 'children'> = ({
  className,
  type,
  value,
  onChange,
  ...props
}) => {
  const [localValue, setLocalValue] = useState(value);

  const preprocessType = useCallback((): typeof type => {
    if (type?.startsWith('date')) {
      return 'text';
    }

    return type;
  }, [type]);

  return (
    <input
      value={localValue}
      onChange={e => {
        // After all, set local state and run onChange callback
        setLocalValue(e.target.value);
        onChange?.(e);
      }}
      className={cn('appearance-none', className)}
      type={preprocessType()}
      {...props}
    />
  );
};
