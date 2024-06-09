import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import Home from '@/app/page';

describe('Index page', () => {
  test('Render without errors', () => {
    expectToRender(<Home />);
  });
});
