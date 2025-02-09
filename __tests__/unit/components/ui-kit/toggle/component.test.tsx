import { describe, test } from 'vitest';

import { Toggle } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('UI Kit / Toggle', () => {
  test('It renders', () => {
    assertRendering(<Toggle />);
  });
});
