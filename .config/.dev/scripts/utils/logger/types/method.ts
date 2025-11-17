import type { SelectKeys } from '@/types';

export type MethodsType =
  | 'start'
  | 'end'
  | SelectKeys<typeof console, 'log' | 'error' | 'warn' | 'info'>;

export type DevLoggerMethod = (message?: any) => void;

/**
 * Contains all methods that has to be presented in DevLogger.
 */
export type MethodDelegate = Record<MethodsType, DevLoggerMethod>;
