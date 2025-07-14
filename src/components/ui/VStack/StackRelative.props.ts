import type { CSSProperties } from 'react';

/** Shared props for VStack and HStack. */
export interface StackRelativeProps {
  /** Is style.gap property, but renamed. */
  spacing?: CSSProperties['gap'];
}
