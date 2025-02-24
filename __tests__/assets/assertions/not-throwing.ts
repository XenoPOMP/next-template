import type { PromiseOr } from 'sass';
import { expect } from 'vitest';

/** Executes function and expects that it won't throw. */
export const assertNotThrowing = <T = void>(
  callable: () => PromiseOr<T, 'async'>,
) => {
  expect(() => callable()).not.toThrow();
};
