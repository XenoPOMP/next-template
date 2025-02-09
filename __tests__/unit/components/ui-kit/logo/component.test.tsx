import { describe, test } from 'vitest';

import { Logo } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Logo component', () => {
  test('It renders', () => {
    assertRendering(<Logo />);
  });
});
