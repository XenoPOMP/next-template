import type { ExpectationResult } from '@vitest/expect';

/** Adds type-safety for vitest matcher extensions. */
export type VitestMatcher<Got = any, Expected = any> = (
  received: Got,
  expected: Expected,
) => ExpectationResult;
