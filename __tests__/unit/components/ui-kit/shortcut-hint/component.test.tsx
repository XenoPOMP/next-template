import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { ShortcutHint } from '@/components/ui/kit';

describe('ShortcutHint component', () => {
  test('It renders', () => {
    assertRendering(<ShortcutHint />);
  });
});
