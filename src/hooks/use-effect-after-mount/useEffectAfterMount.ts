import { useEffect, useRef } from 'react';

/**
 * Skips initial render effect and then works as
 * normal useEffect.
 *
 * @see https://www.youtube.com/shorts/FAnA6QpSryU
 */
export const useEffectAfterMount = (fn: () => void, deps: any[] = []) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
