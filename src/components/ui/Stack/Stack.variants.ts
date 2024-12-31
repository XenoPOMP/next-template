import { type VariantProps, cva } from 'class-variance-authority';

export type StackVariantsType = VariantProps<typeof stackVariants>;

export const stackVariants = cva('', {
  variants: {
    alignStack: {
      left: 'mr-auto ml-[--margin]',
      right: 'ml-auto mr-[--margin]',
      center: 'mx-auto',
    },
  },

  defaultVariants: {
    alignStack: 'center',
  },
});
