import { type VariantProps, cva } from 'class-variance-authority';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva('', {
  variants: {
    variant: {
      default: 'TODO',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
