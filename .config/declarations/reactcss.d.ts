// eslint-disable-next-line unused-imports/no-unused-imports
import { CSSProperties } from 'react';
import type { Lenient } from 'xenopomp-essentials';

type CSSVariables = Record<Lenient<`--${string}`>, string>;

declare module 'react' {
  interface CSSProperties extends CSSVariables {}
}
