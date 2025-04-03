import cn from 'classnames';
import { ChevronRight } from 'lucide-react';
import type { ComponentProps } from 'react';

import { slotable } from '@/components/hoc';
import { Spacer } from '@/components/ui';

import type { SplitViewProps } from './SplitView.props';

export const SplitView = slotable<
  'div',
  ComponentProps<'div'> & SplitViewProps
>(
  'div',
  ({
    Comp,
    className,
    children,
    disableChevronIcon,
    style,
    icon: Icon,
    emptyIcon,
    ...props
  }) => (
    <Comp
      className={cn(
        'flex items-center justify-between',
        'cursor-pointer',
        'hover:bg-ui-list-fill-hover transition-colors',
        className,
      )}
      style={{
        padding: 'calc(var(--p-level-4) * 0.625)',
        ...style,
      }}
      {...props}
    >
      <div className={cn('flex items-center gap-[.75rem]')}>
        {!emptyIcon && Icon && <Icon size='1rem' />}
        {!!emptyIcon && <div className={cn('w-[1rem]')}></div>}
        {children}
      </div>

      <Spacer />

      {!disableChevronIcon && <ChevronRight size='.8em' />}
    </Comp>
  ),
);
