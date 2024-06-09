import { expect } from 'vitest';

/** Executes function and expects that it won't throw. */
export const assertNotThrowing = (callable: () => void) => {
  expect(() => callable()).not.toThrow();
};
