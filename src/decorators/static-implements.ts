/**
 * Statically implement some interface against a class.
 *
 * @example
 * \@staticImplements<MethodDelegate>()
 * export class DevLogger {
 *   static start = createMethod('start');
 *   static end = createMethod('end');
 *   ...
 * }
 */
export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    // eslint-disable-next-line ts/no-unused-expressions
    constructor;
  };
}
