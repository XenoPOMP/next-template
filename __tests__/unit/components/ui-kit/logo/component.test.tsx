import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Logo } from '@/components/ui/kit';

describe('Logo component', () => {
  test('It renders', () => {
    assertRendering(<Logo />);
  });
});
