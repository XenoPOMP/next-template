/**
 * Select only that keys that are presented in type T.
 * @example
 * type Info = SelectKeys<Console, 'warn' | 'debug'>;
 * //     ^? 'warn' | 'debug'
 */
export type SelectKeys<T, K extends keyof T> = K;
