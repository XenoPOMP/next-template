import cn from 'classnames';
import { ChevronRight } from 'lucide-react';
import type { ComponentProps } from 'react';

import { slotable } from '@/components/hoc';
import { Spacer } from '@/components/ui';

import type { SplitViewProps } from './SplitView.props';

export const SplitView = slotable<
  'div',
  ComponentProps<'div'> & SplitViewProps
>('div', ({ Comp, className, children, disableIcon, style, ...props }) => (
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
    {children}

    <Spacer />

    {!disableIcon && <ChevronRight size='.8em' />}
  </Comp>
));
