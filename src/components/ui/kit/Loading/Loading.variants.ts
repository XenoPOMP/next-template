import { type VariantProps, cva } from 'class-variance-authority';

export type LoadingVariantsType = VariantProps<typeof loadingVariants>;

export const loadingVariants = cva('', {
  variants: {
    variant: {
      circle: '',
    },
  },

  defaultVariants: {
    variant: 'circle',
  },
});
