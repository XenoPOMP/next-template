import { describe, test } from 'vitest';

import { Spacer } from '@/components/ui';

import { expectToRender } from '@test/assets';

describe('Spacer component', () => {
  test('It renders', () => {
    expectToRender(<Spacer />);
  });
});
