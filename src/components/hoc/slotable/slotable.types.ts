import type { Slot } from '@radix-ui/react-slot';
import type { ElementType } from 'react';

export interface AsChild {
  asChild?: boolean;
}

export type SlotProps<TComp extends ElementType, TProps> = TProps &
  WithComp<TComp>;

export type CompType<TComp extends ElementType> = typeof Slot | TComp;

export interface WithComp<TComp extends ElementType> {
  Comp: CompType<TComp>;
}
