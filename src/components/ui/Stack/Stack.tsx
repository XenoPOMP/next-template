import cn from 'classnames';
import type { CSSProperties } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';

import styles from './Stack.module.scss';
import type { StackProps } from './Stack.props.ts';
import type { StackVariantsType } from './Stack.variants.ts';
import { stackVariants } from './Stack.variants.ts';

/**
 * @deprecated Renamed to Container.
 */
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

/**
 * Container is component that shrinks to all allowed space, also you can
 * align stack on main axis.
 *
 * @example
 * <>
 *   <Container
 *     asChild
 *     // orientation='horizontal' - default value
 *     // alignStack='center' - default value
 *   >
 *     <main>Main</main>
 *   </Container>
 * </>
 */
const Container: VariableFC<typeof Stack> = ({ children, ...props }) => {
  return <Stack {...props}>{children}</Stack>;
};

export { Container };
