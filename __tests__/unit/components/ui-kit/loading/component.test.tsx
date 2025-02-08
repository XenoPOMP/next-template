import { describe, test } from 'vitest';

import { Loading } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Loading comp', () => {
  test('It renders', () => {
    assertRendering(<Loading />);
  });
});
