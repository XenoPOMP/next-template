import type { SelectKeys } from '@/types';

import type { DevLogger } from '../../../logger';

export type MethodsType =
  | 'start'
  | 'end'
  | SelectKeys<typeof console, 'log' | 'error' | 'warn' | 'info' | 'debug'>;

export type DevLoggerMethod = (message?: any) => void;

/**
 * Contains all methods that has to be presented in DevLogger.
 */
export type MethodDelegate = Record<MethodsType, DevLoggerMethod> & {
  new (): DevLogger;
};
