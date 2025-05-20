import { Input } from '@headlessui/react';
import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { Field } from '@/components/ui/kit';

/**
 * Wraps Input from headlessui with Field component.
 * @constructor
 */
export const InputField: VariableFC<typeof Input, unknown, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <Field asChild>
      <Input
        className={cn(className)}
        {...props}
      />
    </Field>
  );
};
