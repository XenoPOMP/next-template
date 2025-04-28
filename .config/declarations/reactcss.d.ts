// eslint-disable-next-line unused-imports/no-unused-imports
import { CSSProperties } from 'react';
import type { Lenient } from 'xenopomp-essentials';

/**
 * Enables auto-complete feature for CSS variables
 * inside CSSProperties objects.
 * @example
 * const styles: CSSProperties = {
 *   '--value': '0',
 *   background: 'red',
 * };
 */
type CSSVariables = Record<Lenient<`--${string}`>, string>;

declare module 'react' {
  interface CSSProperties extends CSSVariables {}
}
