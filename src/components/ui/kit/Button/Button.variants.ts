import { type VariantProps, cva } from 'class-variance-authority';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva('inline-flex', {
  variants: {
    variant: {
      default: 'TODO',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
