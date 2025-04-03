import { describe, test } from 'vitest';

import { SplitView } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('SplitView component', () => {
  test('It renders', () => {
    assertRendering(<SplitView />);
  });
});
