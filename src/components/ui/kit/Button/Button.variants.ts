import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'classnames';

import styles from './Button.module.scss';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  cn(
    'inline-flex',
    styles.uiButton,
    styles.defaultLike,
    'disabled:opacity-40 disabled:cursor-not-allowed',
    'transition-colors',
  ),
  {
    variants: {
      variant: {
        default: '',
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
