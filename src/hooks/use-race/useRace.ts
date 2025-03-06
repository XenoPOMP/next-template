'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import type { IUseRaceOptions, RaceCallback } from './index.ts';

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
 *
 * @example
 * const TestPage: FC<{}> = () => {
 *   const [query, setQuery] = useState('');
 *
 *   const { logs, addLog } = useRaceStore();
 *
 *   useRace(
 *     query,
 *     async (value, abortController) => {
 *       // You can run data fetch logic here and use
 *       // abort controller for stopping races.
 *
 *       // Example onabort usage
 *       abortController.signal.onabort = () => {
 *         addLog(`🚫 ${value}`);
 *       };
 *
 *       // Emulate heavy data fetching process
 *       setTimeout(() => {
 *         addLog(`✅ ${value}`);
 *       }, 100);
 *     },
 *     {
 *       delay: 444,
 *
 *       // Run race only if search query is longer than
 *       // 3 symbols.
 *       raceResolveCondition: val => (val?.length ?? 0) > 3,
 *     },
 *   );
 *
 *   return (
 *     <UiContainer as={'main'}>
 *       <div className={cn('sticky top-0 py-[1rem] bg-primary-bg')}>
 *         <p>Testing page</p>
 *
 *         <input
 *           value={query}
 *           onChange={ev => setQuery(ev.target.value)}
 *         />
 *       </div>
 *
 *       {!!logs.length && logs.map((log, _i) => <p key={_i}>{log}</p>)}
 *     </UiContainer>
 *   );
 * };
 */
export const useRace = <TValue = unknown, TResult = unknown>(
  value?: TValue,
  callback?: RaceCallback<TValue, TResult>,
  options: IUseRaceOptions<TValue> = {
    // eslint-disable-next-line jsdoc/require-jsdoc
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
