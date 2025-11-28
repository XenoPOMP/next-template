import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { CoreLayout } from '@/components/layout';

describe('CoreLayout', () => {
  test('It renders', () => {
    // eslint-disable-next-line deprecation/deprecation
    assertRendering(<CoreLayout>12</CoreLayout>);
  });
});
