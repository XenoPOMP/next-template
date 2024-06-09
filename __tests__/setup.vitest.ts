import { expect } from 'vitest';

import { toMatchStructure } from '@/__tests__/assets/extensions';

expect.extend({
  toMatchStructure,
});
