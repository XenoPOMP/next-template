type NativeEnum<C extends string> = Readonly<{
  [Code in C]: Code;
}>;

/**
 * Creates enum as object.
 * @param codes
 * @example
 * createEnum('FIRST', 'SECOND')
 * // ^? { FIRST: 'FIRST', SECOND: 'SECOND' }
 */
export const createEnum = <C extends string>(...codes: C[]): NativeEnum<C> => {
  const res: Partial<NativeEnum<C>> = {};

  for (const code of codes) {
    res[code] = code;
  }

  return res as NativeEnum<C>;
};
