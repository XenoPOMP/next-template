import Link from 'next/link';
import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Button } from '@/components/ui/kit';

describe('UI Kit / Button', () => {
  test('It renders', () => {
    assertRendering(<Button />);
  });

  test('Slot mechanism works', () => {
    assertRendering(
      <Button asChild>
        <Link href='/'>Home</Link>
      </Button>,
    );
  });
});
