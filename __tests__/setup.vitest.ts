import type { MatchersObject } from '@vitest/expect';
import { expect } from 'vitest';

import { toMatchStructure } from '@test/assets/extensions';

export const matchers = {
  toMatchStructure,
} satisfies MatchersObject;

expect.extend(matchers);
