import type { MatchersObject } from '@vitest/expect';
import { expect } from 'vitest';

import { toMatchStructure } from '@test/assets/extensions';
import { toBeSus } from '@test/assets/extensions/toBeSus';

export const matchers = {
  toMatchStructure,
  toBeSus,
} satisfies MatchersObject;

expect.extend(matchers);
