import { type VariantProps, cva } from 'class-variance-authority';

export type BadgeVariantsType = VariantProps<typeof badgeVariants>;

export const allBadgeVariants = {
  default: 'bg-gray-500',
  success: 'bg-green-600',
  warning: 'bg-orange-500',
  danger: 'bg-red-500',
};

export const badgeVariants = cva('', {
  variants: {
    variant: allBadgeVariants,
  },

  defaultVariants: {
    variant: 'default',
  },
});
