import type { MatcherState } from '@vitest/expect';
import type { Fn } from 'xenopomp-essentials';

import type { VitestMatcher } from '@test/assets';
import type { matchers } from '@test/setup.vitest';

type Matchers = typeof matchers & { sus: string };

export type InferCustomMatchers<R extends MatcherState = any> = {
  [Matcher in keyof Matchers as Matchers[Matcher] extends Fn
    ? Matcher
    : never]: Matchers[Matcher] extends VitestMatcher<any, infer Expected>
    ? [Expected] extends [unknown]
      ? () => R
      : (expected: Expected) => R
    : never;
};
