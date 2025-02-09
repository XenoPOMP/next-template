// eslint-disable-next-line unused-imports/no-unused-imports
import type { Assertion, AsymmetricMatchersContaining } from 'vitest';

import type { InferCustomMatchers } from '@test/assets';

interface CustomMatchers<R = unknown> extends InferCustomMatchers<R> {}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
