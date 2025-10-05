import { describe, test } from 'vitest';

import { TypesafeLink } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('TypesafeLink component', () => {
  test('It renders', () => {
    assertRendering(
      <TypesafeLink
        href='/page/:number'
        params={{
          number: '1',
        }}
      />,
    );
  });
});
