import Link from 'next/link';
import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { Button } from '@/src/components/ui/kit';

describe('UI Kit / Button', () => {
  test('It renders', () => {
    expectToRender(<Button />);
  });

  test('Slot mechanism works', () => {
    expectToRender(
      <Button asChild>
        <Link href='/'>Home</Link>
      </Button>,
    );
  });
});
