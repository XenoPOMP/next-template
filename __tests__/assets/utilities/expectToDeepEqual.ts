import { expect } from 'vitest';

/**
 * Deeply checks if two objects are equal.
 *
 * @param expected
 * @param real
 */
export const expectToDeepEqual = <
  Type extends any,
  RealType extends any = Type
>(
  expected: Type,
  real: RealType
) => {
  expect(expected).to.deep.equal(real);
};
