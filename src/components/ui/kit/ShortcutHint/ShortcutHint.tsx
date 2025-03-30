import { Kbd } from '@heroui/kbd';
import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

/**
 *
 */
export const ShortcutHint: VariableFC<typeof Kbd> = ({
  className,
  ...props
}) => {
  return (
    <Kbd
      className={cn(className)}
      {...props}
    />
  );
};
