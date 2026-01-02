import { Cog } from 'lucide-react';
import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { SplitView } from '@/components/ui/kit';

describe('SplitView component', () => {
  test('It renders', () => {
    assertRendering(<SplitView />);
    assertRendering(<SplitView icon={Cog} />);
    assertRendering(<SplitView emptyIcon />);
  });
});
