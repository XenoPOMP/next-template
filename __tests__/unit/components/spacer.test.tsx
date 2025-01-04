import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { Spacer } from '@/src/components/ui';

describe('Spacer component', () => {
  test('It renders', () => {
    expectToRender(<Spacer />);
  });
});
