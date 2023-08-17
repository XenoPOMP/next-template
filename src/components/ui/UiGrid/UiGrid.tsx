import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { UiGridProps } from './UiGrid.props';

interface UiGridNestedProps
  extends PropsWith<'children' | 'className' | 'id' | 'style', UiGridProps> {}

const getInlineStyles = ({
  columns,
  rows,
  gap,
}: Pick<UiGridNestedProps, 'columns' | 'rows' | 'gap'>): CSSProperties => {
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap,
    display: 'grid',
  };
};

const UiGrid: FC<UiGridNestedProps> = ({
  children,
  className,
  id,
  style,
  columns = 12,
  rows = 1,
  gap = '1rem',
  margin,
}) => {
  return (
    <UiContainer
      className={cn(className)}
      id={id}
      style={{
        ...getInlineStyles({ columns, rows, gap }),
        ...style,
      }}
      margin={margin}
    >
      {children}
    </UiContainer>
  );
};

export default UiGrid;
