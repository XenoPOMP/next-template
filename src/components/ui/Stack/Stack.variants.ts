import { type VariantProps, cva } from 'class-variance-authority';

import styles from './Stack.module.scss';

export type StackVariantsType = VariantProps<typeof stackVariants>;

const createCompoundVariants = (
  orientation: 'vertical' | 'horizontal',
  args: Record<'start' | 'end' | 'center', string>,
): {
  orientation: typeof orientation;
  alignStack: 'start' | 'end' | 'center';
  className: string;
}[] => {
  return [
    {
      orientation,
      alignStack: 'start',
      className: args.start,
    },
    {
      orientation,
      alignStack: 'end',
      className: args.end,
    },
    {
      orientation,
      alignStack: 'center',
      className: args.center,
    },
  ];
};

export const stackVariants = cva(styles.orientation, {
  variants: {
    orientation: {
      vertical: styles.vertical,
      horizontal: styles.horizontal,
    },

    alignStack: {
      start: '',
      end: '',
      center: '',
    },
  },

  compoundVariants: [
    ...createCompoundVariants('horizontal', {
      start: 'mr-auto ml-[--insets]',
      end: 'ml-auto mr-[--insets]',
      center: 'mx-auto',
    }),

    ...createCompoundVariants('vertical', {
      start: 'mb-auto mt-[--insets]',
      end: 'mt-auto mb-[--insets]',
      center: 'my-auto',
    }),
  ],

  defaultVariants: {
    alignStack: 'center',
    orientation: 'horizontal',
  },
});
