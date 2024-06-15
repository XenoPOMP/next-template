import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { type IUseRaceOptions, type RaceCallback } from './index.ts';

/**
 * This hook eliminates race conditions. Hook tracks
 * provided value and debounce it.
 *
 * You can specify condition to run new race ([options.raceResolveCondition]{@link IUseRaceOptions.raceResolveCondition}).
 *
 * Callback takes two args: new value and abort controller.
 * Use abort controller inside callback to unlocking full power of
 * race condition nerf.
 *
 * @param value     This value is being tracked for running race
 * @param callback  This callback takes val and abort controller
 * @param options
 */
export const useRace = <TValue = unknown, TResult = unknown>(
  value?: TValue,
  callback?: RaceCallback<TValue, TResult>,
  options: IUseRaceOptions<TValue> = {
    raceResolveCondition: value => value !== undefined,
  },
) => {
  // This value is used to trigger debounced call
  // of callback
  const [debouncedValue] = useDebounce(value, options?.delay ?? 1000);

  const [data, setData] = useState<TResult>();

  useEffect(() => {
    const abortController = new AbortController();

    // Debounced value is determined as updated.
    // Begin race.
    if (options?.raceResolveCondition?.(debouncedValue)) {
      // Update local data.
      callback?.(debouncedValue, abortController).then(newData =>
        setData(newData),
      );
    }

    return () => abortController.abort();
  }, [debouncedValue]);

  return data;
};
