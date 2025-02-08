/** Adds type-safety for vitest matcher extensions. */
export type VitestMatcher<Actual = any, Expected = any> = (
  actual: Actual,
  expected: Expected,
) => {
  pass: boolean;
};
