import { Kbd } from '@heroui/kbd';
import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

/**
 * Presents Keyboard Key hint.
 *
 * @constructor
 *
 * @example
 * <ShortcutHint keys={['command', 'ctrl']}>S</ShortcutHint>
 */
export const ShortcutHint: VariableFC<typeof Kbd> = ({
  className,
  ...props
}) => {
  return (
    <Kbd
      className={cn(
        'leading-[inherit]',
        'whitespace-nowrap text-nowrap',
        className,
      )}
      {...props}
    />
  );
};
