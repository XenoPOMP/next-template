import type { MatcherState, RawMatcherFn } from '@vitest/expect';
import type { Fn } from 'xenopomp-essentials';

import type { matchers } from '@test/setup.vitest';

type Matchers = typeof matchers & { sus: string };

export type InferCustomMatchers<R extends MatcherState = any> = {
  [Matcher in keyof Matchers as Matchers[Matcher] extends Fn
    ? Matcher
    : never]: Matchers[Matcher] extends Fn<
    [actual: infer Actual, expected: any],
    ReturnType<RawMatcherFn<R>>
  >
    ? (actual: Actual) => R
    : never;
};
