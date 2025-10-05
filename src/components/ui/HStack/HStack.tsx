import cn from 'classnames';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import { slotable } from '@/components/hoc';
import type { StackRelativeProps } from '@/components/ui/VStack/StackRelative.props.ts';
import type { HStackVariantsType } from '@/components/ui/VStack/VStack.variants.ts';
import { hStackVariants } from '@/components/ui/VStack/VStack.variants.ts';

type HStackProps = FCProps<VariableFC<'div'>>;

export const HStack = slotable<
  'div',
  HStackProps & StackRelativeProps & HStackVariantsType
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
        'flex',
        hStackVariants({
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
