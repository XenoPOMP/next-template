/**
 * Recursevely changes all keys` types inside T to R.
 */
export type DeepTypeReplace<T extends object, R extends any> = {
  [K in keyof T]: T[K] extends object ? DeepTypeReplace<T[K], R> : R;
};
