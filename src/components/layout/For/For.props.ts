import type { FunctionalChildren } from '@xenopomp/advanced-types';

export interface ForProps<ItemType> {
  each: ItemType[];
  children?: Extract<
    FunctionalChildren<[item: ItemType, index: number]>,
    (...props: any[]) => any
  >;
}
