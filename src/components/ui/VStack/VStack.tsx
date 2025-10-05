import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';
import type { StackRelativeProps } from '@/components/ui/VStack/StackRelative.props.ts';

import type { VStackVariantsType } from './VStack.variants.ts';
import { vStackVariants } from './VStack.variants.ts';

type VStackProps = FCProps<VariableFC<'div'>>;

export const VStack = slotable<
  'div',
  VStackProps & StackRelativeProps & VStackVariantsType
>(
  'div',
  ({
    Comp,
    className,
    children,
    style,
    spacing = '1.2rem',
    alignment,
    ...props
  }) => (
    <Comp
      className={cn(
        'flex flex-col',
        vStackVariants({
          alignment,
        }),
        className,
      )}
      style={{
        gap: spacing,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  ),
);
