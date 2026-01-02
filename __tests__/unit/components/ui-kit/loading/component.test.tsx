import type { FC } from 'react';
import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Loading } from '@/components/ui/kit';
import * as __ICONS from '@/components/ui/kit/Loading/icons';

const ICONS = Object.entries<FC>(__ICONS).map(([name, val]) => ({
  name,
  icon: val,
}));

describe('Loading comp', () => {
  test('It renders', () => {
    assertRendering(<Loading />);
    assertRendering(<Loading variant='circle' />);
  });

  test.each(ICONS)('Icon $name renders', ({ icon: Icon }) => {
    assertRendering(<Icon />);
  });
});
