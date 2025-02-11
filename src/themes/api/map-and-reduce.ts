import type { KeyValuePair } from 'tailwindcss/types/config';
import type { ArrayType } from 'xenopomp-essentials';

/**
 * Helper function for TW config creations.
 * Applies certain mapper function to each array`s item
 * and then merges each object to one.
 *
 * @param vals
 * @param mapping
 *
 * @example
 * // All available padding sizes
 * const sizing: KeyValuePair = mapAndReduce([1, 2, 3, 4, 5] as const, n => ({
 *   [n]: `var(--p-level-${n})`,
 * }));
 */
export const mapAndReduce = <Values extends any[]>(
  vals: Values,
  mapping: (v: ArrayType<Values>) => KeyValuePair,
) => {
  return vals.map(mapping).reduce((o, n) => ({ ...o, ...n }), {});
};
