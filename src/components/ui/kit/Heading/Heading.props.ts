import type { ElementType } from 'react';

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5;
}

export type HeadingType = Extract<ElementType, `h${HeadingProps['level']}`>;
