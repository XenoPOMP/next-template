import { type VariantProps, cva } from 'class-variance-authority';

export type BadgeVariantsType = VariantProps<typeof badgeVariants>;

export const allBadgeVariants = {
  default: '!bg-ui-badges-default-fill !border-ui-badges-default-border',
  success: '!bg-ui-badges-success-fill !border-ui-badges-success-border',
  warning: '!bg-ui-badges-warning-fill !border-ui-badges-warning-border',
  danger: '!bg-ui-badges-danger-fill !border-ui-badges-danger-border',
};

export const badgeVariants = cva('', {
  variants: {
    variant: allBadgeVariants,
  },

  defaultVariants: {
    variant: 'default',
  },
});
