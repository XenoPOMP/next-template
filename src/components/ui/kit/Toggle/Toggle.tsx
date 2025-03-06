import { Switch } from '@headlessui/react';
import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

/**
 * Toggle component for UI kit
 * @param className
 * @param props
 * @constructor
 */
export const Toggle: VariableFC<typeof Switch, unknown, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <Switch
      className={cn(
        'group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600',
        className,
      )}
      {...props}
    >
      <span className='size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6' />
    </Switch>
  );
};
