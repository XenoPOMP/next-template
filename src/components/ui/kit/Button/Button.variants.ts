import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import cn from 'classnames';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  cn(
    'inline-flex',
    'flex-center gap-[.125em]',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    'transition-colors',
  ),
  {
    variants: {
      variant: {
        default: cn(),
        accent: 'bg-accent',
        danger: cn(),
      },
    },

    compoundVariants: [
      // Default-like effects
      {
        variant: ['default', 'accent'],
        className: cn(),
      },
    ],

    defaultVariants: {
      variant: 'default',
    },
  },
);
