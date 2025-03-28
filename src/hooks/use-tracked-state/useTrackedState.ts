'use client';

import { useEffect, useState } from 'react';
import type { Fn, SetState } from 'xenopomp-essentials';

type MountFn<S> = (updated: S) => void;
type UseStateResult<S> = [S, SetState<S>];

/**
 *
 */
export function useTrackedState<S>(
  initialState: S | Fn<[], S>,
  callback?: MountFn<S>,
): UseStateResult<S> {
  const [state, updateState] = useState(initialState);

  useEffect(() => {
    callback?.(state);
  }, [callback, state]);

  return [state, updateState];
}
