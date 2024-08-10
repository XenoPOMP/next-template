import type { FunctionalChildren } from '@xenopomp/advanced-types';

export interface ForProps<ItemType> {
  data: ItemType[];
  children?: Extract<FunctionalChildren<[item: ItemType]>, Function>;
}
