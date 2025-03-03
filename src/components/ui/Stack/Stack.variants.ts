import { type VariantProps, cva } from 'class-variance-authority';

export type StackVariantsType = VariantProps<typeof stackVariants>;

export const stackVariants = cva('', {
  variants: {
    orientation: {
      vertical: '',
      horizontal: '',
    },

    alignStack: {
      left: 'mr-auto ml-[--insets]',
      right: 'ml-auto mr-[--insets]',
      center: 'mx-auto',
    },
  },

  defaultVariants: {
    alignStack: 'center',
  },
});
