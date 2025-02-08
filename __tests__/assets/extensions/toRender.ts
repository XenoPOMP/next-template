// export const toRender: VitestMatcher<ReactNode, never> = (
//   actual,
//   expected,
// ) => {};
import { expect } from 'vitest';

const mem = () => {
  const sus = expect('12').toMatchStructure;
  //    ^?

  const am = expect('12').toBeSus;
  //    ^?
};
