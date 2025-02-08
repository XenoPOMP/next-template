import { describe, test } from 'vitest';

import { Loading } from '@/components/ui/kit';

import { expectToRender } from '@test/assets';

describe('Loading comp', () => {
  test('It renders', () => {
    expectToRender(<Loading />);
  });
});
