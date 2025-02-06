import { expect } from 'vitest';

import { toMatchStructure } from '@test/assets/extensions';

expect.extend({
  toMatchStructure,
});
