import type { AnyObject } from 'xenopomp-essentials';

import { NO_INDEX_PAGE } from '@app/constants';

interface Item {
  name: string;
  values: [real: AnyObject, toMatch: AnyObject];
}

export const matchingDataFixture: Item[] = [
  {
    name: 'No index page',
    values: [NO_INDEX_PAGE, { robots: { index: true, follow: true } }],
  },
];
