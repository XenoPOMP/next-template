'use client';

import { useState } from 'react';
import type { Fn, SetState } from 'xenopomp-essentials';

import { useEffectAfterMount } from '@/hooks';

type MountFn<S> = (updated: S) => void;
type UseStateResult<S> = [S, SetState<S>];

/**
 * Works as useState hook, but allows to provide callback which
 * will called on each non-first mount effect.
 *
 * @example
 * // Will log state each time it updates (but skips initial render).
 * const [state, updateState] = useTrackedState(initialValue ?? 1, (v) => console.log(v));
 */
export function useTrackedState<S>(
  initialState: S | Fn<[], S>,
  callback?: MountFn<S>,
): UseStateResult<S> {
  const [state, updateState] = useState(initialState);

  useEffectAfterMount(() => {
    callback?.(state);
  }, [callback, state]);

  return [state, updateState];
}
