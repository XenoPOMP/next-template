import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';

describe('UiGrid component', () => {
  test('It renders', () => {
    expectToRender(<UiGrid />);
  });
});
