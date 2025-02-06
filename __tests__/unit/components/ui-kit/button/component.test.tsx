import Link from 'next/link';
import { describe, test } from 'vitest';

import { Button } from '@/components/ui/kit';

import { expectToRender } from '@test/assets';

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
