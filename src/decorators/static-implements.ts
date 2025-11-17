/**
 * Statically implement some interface against a class.
 */
export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    // eslint-disable-next-line ts/no-unused-expressions
    constructor;
  };
}
