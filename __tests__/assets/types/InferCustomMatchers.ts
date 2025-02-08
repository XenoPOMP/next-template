import type { ExpectationResult, MatcherState } from '@vitest/expect';
import type { Fn } from 'xenopomp-essentials';

import type { matchers } from '@test/setup.vitest';

type Matchers = typeof matchers & { sus: string };

export type InferCustomMatchers<R extends MatcherState = any> = {
  //         ^?
  [Matcher in keyof Matchers as Matchers[Matcher] extends Fn
    ? Matcher
    : never]: Matchers[Matcher] extends (
    received: any,
    expected: infer Expected,
  ) => ExpectationResult
    ? (expected: Expected) => R
    : () => R;
};
