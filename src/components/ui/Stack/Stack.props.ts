import type { ComponentProps } from 'react';

export interface StackProps extends ComponentProps<'section'> {
  insets?: string;
  maxSize?: string;
}
