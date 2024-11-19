import { type VariantProps, cva } from 'class-variance-authority';

export type UiContainerVariantsType = VariantProps<typeof uiContainerVariants>;

export const uiContainerVariants = cva('', {
  variants: {
    alignContainer: {
      left: 'mr-auto',
      right: 'ml-auto',
      center: 'mx-auto',
    },
  },

  defaultVariants: {
    alignContainer: 'center',
  },
});
