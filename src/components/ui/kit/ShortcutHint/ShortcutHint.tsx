import { Kbd } from '@heroui/kbd';
import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import uiStyles from '@/components/ui/kit/UIKit.module.scss';

import styles from './ShortcutHint.module.scss';

/**
 * Presents Keyboard Key hint.
 * @param className
 * @param props
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
        uiStyles.uiField,
        uiStyles.withBg,
        styles.hint,
        className,
      )}
      {...props}
    />
  );
};
