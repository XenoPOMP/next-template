import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { buttonVariants } from '@/src/components/ui/kit/Button/Button.variants.ts';

describe('UI Kit / Button / Variants', () => {
  test('It does not throw', () => {
    assertNotThrowing(() => buttonVariants());
  });
});
