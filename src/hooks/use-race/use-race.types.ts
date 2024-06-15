import type { Synchronous } from '@xenopomp/advanced-types';

// Base type for race callbacks.
export type RaceFunc<TValue = unknown, TResult = unknown, TReturn = TResult> = (
  value?: TValue,
) => Promise<TReturn>;

// Race function, but with abort controller.
export type RaceCallback<
  TValue = unknown,
  TResult = unknown,
  TReturn = TResult,
> = (
  value?: TValue,
  abortController?: AbortController,
) => ReturnType<RaceFunc<TValue, TResult, TReturn>>;

export interface IUseRaceOptions<TValue = unknown, TResult = unknown> {
  delay?: number;

  // This function determines if race should be started
  raceResolveCondition?: Synchronous<RaceFunc<TValue, TResult, boolean>>;
}
