import { describe, test } from 'vitest';

import { CoreLayout } from '@/components/layout';

import { assertRendering } from '@test/assets';

describe('CoreLayout', () => {
  test('It renders', () => {
    // eslint-disable-next-line deprecation/deprecation
    assertRendering(<CoreLayout>12</CoreLayout>);
  });
});
