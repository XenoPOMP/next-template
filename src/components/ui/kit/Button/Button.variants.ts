import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'classnames';

import uiStyles from '@/components/ui/kit/UIKit.module.scss';

import styles from './Button.module.scss';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  cn(
    'inline-flex',
    'flex-center gap-[.125em]',
    styles.uiButton,
    styles.defaultLike,
    'disabled:opacity-40 disabled:cursor-not-allowed',
    'transition-colors',
  ),
  {
    variants: {
      variant: {
        default: cn(uiStyles.withBg),
        accent: 'bg-accent',
      },
    },

    compoundVariants: [
      // Default-like effects
      {
        variant: ['default', 'accent'],
        className: cn(styles.defaultEffects),
      },
    ],

    defaultVariants: {
      variant: 'default',
    },
  },
);
