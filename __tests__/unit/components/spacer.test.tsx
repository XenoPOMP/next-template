import { describe, test } from 'vitest';

import { Spacer } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('Spacer component', () => {
  test('It renders', () => {
    assertRendering(<Spacer />);
  });
});
