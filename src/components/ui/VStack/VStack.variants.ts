import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import cn from 'classnames';

import styles from './Alignment.module.scss';

/**
 * Creates cva variants for VStack or HStack.
 */
function createStackAlignment(masterClass: string) {
  return cva(cn(styles.container, masterClass), {
    variants: {
      alignment: {
        // Top
        topLeading: cn(styles.topLeading),
        top: cn(styles.top),
        topTrailing: cn(styles.topTrailing),
        // Center
        leading: cn(styles.leading),
        center: cn(styles.center),
        trailing: cn(styles.trailing),
        // Bottom
        bottomLeading: cn(styles.bottomLeading),
        bottom: cn(styles.bottom),
        bottomTrailing: cn(styles.bottomTrailing),
      },
    },
    defaultVariants: {
      alignment: undefined,
    },
  });
}

export const vStackVariants = createStackAlignment(styles.vstack!);
export type VStackVariantsType = VariantProps<typeof vStackVariants>;

export const hStackVariants = createStackAlignment(styles.hstack!);
export type HStackVariantsType = VariantProps<typeof hStackVariants>;
