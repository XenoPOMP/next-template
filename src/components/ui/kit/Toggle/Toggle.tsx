import { Switch } from '@headlessui/react';
import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

/**
 * Toggle component for UI kit
 *
 * @constructor
 */
export const Toggle: VariableFC<typeof Switch, unknown, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <Switch
      className={cn(
        'group inline-flex h-[2.4rem] w-[4.4rem] items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600',
        className,
      )}
      {...props}
    >
      <span className='size-[1.6rem] translate-x-[0.4rem] rounded-full bg-white transition group-data-[checked]:translate-x-[2.4rem]' />
    </Switch>
  );
};
