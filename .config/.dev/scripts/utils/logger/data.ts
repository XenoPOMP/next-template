import c, { cyanBright, green, red, white, yellow } from 'ansi-colors';

import type { MethodsType } from './types';

export const PREFIXES: Record<
  MethodsType,
  { raw: string; color: (s: string) => string }
> = {
  start: {
    raw: 'START',
    color: green,
  },
  end: {
    raw: 'END',
    color: green,
  },
  log: {
    raw: 'LOG',
    color: white,
  },
  error: {
    raw: 'ERROR',
    color: red,
  },
  warn: {
    raw: 'WARN',
    color: yellow,
  },
  info: {
    raw: 'INFO',
    color: cyanBright,
  },
  debug: {
    raw: 'DEBUG',
    color: c.magenta.bold,
  },
};
