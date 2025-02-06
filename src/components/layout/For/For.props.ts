import type { FunctionalChildren } from 'xenopomp-essentials';

export interface ForProps<ItemType> {
  each: ItemType[];
  children?: Extract<
    FunctionalChildren<[item: ItemType, index: number]>,
    (...props: any[]) => any
  >;
}
