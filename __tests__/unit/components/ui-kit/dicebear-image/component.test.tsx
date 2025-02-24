import { describe, test } from 'vitest';

import { DicebearImage } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('DicebearImage component', () => {
  test('It renders', () => {
    assertRendering(<DicebearImage seed='XenoPOMP' />);
  });
});
