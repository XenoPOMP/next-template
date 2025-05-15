import type { FunctionalChildren } from 'xenopomp-essentials';

interface AdditionalForOptions {
  isLatest: boolean;
  isFirst: boolean;
}

export interface ForProps<ItemType> {
  each: ItemType[];
  children?: Extract<
    FunctionalChildren<
      [item: ItemType, index: number, options: AdditionalForOptions]
    >,
    (...props: any[]) => any
  >;
}
