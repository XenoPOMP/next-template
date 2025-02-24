import { expect } from 'vitest';

/** Executes function and expects that it won't throw. */
export const assertNotThrowing = <T = void>(callable: () => T | Promise<T>) => {
  expect(() => callable()).not.toThrow();
};
