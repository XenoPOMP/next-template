import { type VariantProps, cva } from 'class-variance-authority';
import type { Defined } from 'xenopomp-essentials';

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

export type Variant = Defined<NonNullable<LoadingVariantsType['variant']>>;
