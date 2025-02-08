import type { VitestMatcher } from '@test/assets';

function hasEqualStructure(obj1: any, obj2: any): boolean {
  return Object.keys(obj1).every(key => {
    const v = obj1[key];
    if (typeof v === 'object' && v !== null) {
      return hasEqualStructure(v, obj2[key]);
    }
    // eslint-disable-next-line no-prototype-builtins
    return obj2.hasOwnProperty(key);
  });
}

/**
 * Extends expect function with toMatchStructure
 * method. It checks if one object has the same structure
 * as second.
 * @param received
 * @param expected
 */
export const toMatchStructure: VitestMatcher = (received, expected) => {
  const pass = hasEqualStructure(received, expected);
  return {
    message: () => `expected ${expected} to match structure ${received}`,
    pass,
  };
};
