import cn from 'classnames';
import type { CSSProperties } from 'react';

import { slotable } from '@/src/components/hoc';

import styles from './Stack.module.scss';
import type { StackProps } from './Stack.props.ts';
import { type StackVariantsType, stackVariants } from './Stack.variants.ts';

const Stack = slotable<'section', StackProps & StackVariantsType>(
  'section',
  ({
    Comp,
    className,
    style,
    insets = '2rem',
    maxWidth = '1680px',
    alignStack,
    ...props
  }) => (
    <Comp
      className={cn(styles.uiStack, stackVariants({ alignStack }), className)}
      style={
        {
          '--insets': insets,
          '--max-width': maxWidth,
          ...style,
        } as CSSProperties
      }
      {...props}
    />
  ),
);

export default Stack;
