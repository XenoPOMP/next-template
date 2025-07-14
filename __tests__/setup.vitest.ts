import type { MatchersObject } from '@vitest/expect';
import deepmerge from 'deepmerge';
import * as jestExtendedMatchers from 'jest-extended';
import { expect } from 'vitest';

import { toMatchStructure } from '@test/assets/extensions';

export const matchers = deepmerge(
  {
    toMatchStructure,
  },
  jestExtendedMatchers,
) satisfies MatchersObject;

expect.extend(matchers);
