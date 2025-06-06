import cn from 'classnames';
import type { CSSProperties } from 'react';

import { slotable } from '@/components/hoc';

import styles from './Stack.module.scss';
import type { StackProps } from './Stack.props.ts';
import type { StackVariantsType } from './Stack.variants.ts';
import { stackVariants } from './Stack.variants.ts';

const Stack = slotable<'section', StackProps & StackVariantsType>(
  'section',
  ({
    Comp,
    className,
    style,
    insets = '4.0rem',
    maxSize = 'calc(1600px + 2 * var(--insets))',
    alignStack,
    orientation,
    ...props
  }) => (
    <Comp
      className={cn(
        styles.uiStack,
        stackVariants({ alignStack, orientation }),
        className,
      )}
      style={
        {
          '--insets': insets,
          '--max-size': maxSize,
          ...style,
        } as CSSProperties
      }
      {...props}
    />
  ),
);

export default Stack;
