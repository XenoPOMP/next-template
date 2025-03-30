import { describe, test } from 'vitest';

import { ShortcutHint } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('ShortcutHint component', () => {
  test('It renders', () => {
    assertRendering(<ShortcutHint />);
  });
});
