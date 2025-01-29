import { describe, test } from 'vitest';

import { buttonVariants } from '@/components/ui/kit/Button/Button.variants';

import { assertNotThrowing } from '@test/assets';

describe('UI Kit / Button / Variants', () => {
  test('It does not throw', () => {
    assertNotThrowing(() => buttonVariants());
  });
});
