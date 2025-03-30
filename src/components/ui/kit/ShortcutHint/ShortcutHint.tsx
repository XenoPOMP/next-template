import { Kbd } from '@heroui/kbd';
import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import styles from './ShortcutHint.module.scss';

/**
 *
 */
export const ShortcutHint: VariableFC<typeof Kbd> = ({
  className,
  ...props
}) => {
  return (
    <Kbd
      className={cn(
        'leading-[inherit]',
        'px-[0.3em] py-[0.1em]',
        'bg-ui-fill border-ui-border rounded-[.4em] border',
        'text-primary-font text-center',
        'whitespace-nowrap text-nowrap',
        styles.hint,
        className,
      )}
      {...props}
    />
  );
};
