'use client';

import { useEffect, useRef, useState } from 'react';

import useBoolean from '@/src/hooks/useBoolean';

type WorkerFunction<R extends any> = (...args: any[]) => R;

const workerHandler = <R>(func: WorkerFunction<R>) => {
  onmessage = event => {
    postMessage(func(event.data));
  };
};

/**
 * Hook for using web workers.
 *
 * **Not working in server side!!!**
 *
 * @param func
 * @param {WorkerOptions} options       options of worker.
 *
 * @example
 * import { useWebWorker } from '@hooks/useWebWorker';
 *
 * import { isUndefined } from '@utils/type-checks';
 *
 * const MainPage = () => {
 *   const {
 *     result,    // Result of function (typeof ReturnType<typeof func>)
 *     isLoading, // Boolean state. Sets to true while loading.
 *     run,       // Executes func in separate process (NOT BLOCKING MAIN
 *                // PROCESS)
 *     terminate  // Terminate web worker (end it`s execution);
 *   } = useWebWorker<number>(() => {
 *     return veryExpensiveFunc(100_000_000_000);
 *   });
 *
 *   return (
 *     <Page meta={{...}} >
 *       <p>Result: {!isUndefined(result) ? result : '???'}</p>
 *
 *       <button onClick={() => run()}>Execute function</button>
 *
 *       <button onClick={() => terminate()}>Terminate function</button>
 *     </Page>
 *   );
 * };
 */
export const useWebWorker = <Result>(
  func: WorkerFunction<Result>,
  options?: WorkerOptions
): {
  result?: Result;
  isLoading: boolean;
  run: (...args: Parameters<typeof func>) => void;
  terminate: () => void;
} => {
  /** State of result. Contains function execution`s result. */
  const [result, setResult] = useState<ReturnType<typeof func>>();
  /**
   * State of loading. Boolean value.
   * True if worker is working now.
   */
  const [isLoading, toggleIsLoading, setIsLoading] = useBoolean(false);

  /** Link to the worker object. */
  const workerRef = useRef<Worker | null>(null);

  /**
   * This function starts web worker in separate
   * process.
   *
   * @param args      arguments from original function.
   *                  If original func has multiply arguments,
   *                  like const func = (arg1: number, arg2: string) => {},
   *                  you have to put args as array.
   */
  const run: ReturnType<typeof useWebWorker>['run'] = args => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${func})`])),
      options
    );
    workerRef.current = worker;
    setIsLoading(true);

    worker.onmessage = ev => {
      setResult(ev.data);
      setIsLoading(false);
      worker.terminate();
    };

    worker.postMessage(args);
  };

  /**
   * Terminate current web worker.
   */
  const terminate = () => {
    setIsLoading(false);
    return workerRef.current?.terminate();
  };

  return {
    result,
    isLoading,
    run,
    terminate,
  };
};
