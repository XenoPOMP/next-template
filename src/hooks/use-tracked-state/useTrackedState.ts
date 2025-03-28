'use client';

import { useState } from 'react';
import type { Fn, SetState } from 'xenopomp-essentials';

import { useEffectAfterMount } from '@/hooks';

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

  useEffectAfterMount(() => {
    callback?.(state);
  }, [callback, state]);

  return [state, updateState];
}
