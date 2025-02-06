import { expect } from 'vitest';

/**
 * Deeply checks if two objects are equal.
 *
 * @param expected
 * @param real
 */
export const expectToDeepEqual = <Type>(
  expected: Type,
  real: NoInfer<Type>,
) => {
  expect(expected).to.deep.equal(real);
};
