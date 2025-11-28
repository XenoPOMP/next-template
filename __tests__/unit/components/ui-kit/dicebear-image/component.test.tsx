import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { DicebearImage } from '@/components/ui/kit';

describe('DicebearImage component', () => {
  test('It renders', () => {
    assertRendering(<DicebearImage seed='XenoPOMP' />);
  });
});
