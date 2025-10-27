import isMobile from 'is-mobile';
import platform from 'platform';
import { useMemo } from 'react';

import type { PlatformDetermination, PlatformKind } from '@/hooks';

/**
 * Parses user agent and provides info about platform.
 */
export const usePlatform = (): PlatformDetermination => {
  const kind: PlatformKind = useMemo(() => {
    const userAgent = platform.ua;

    if (!userAgent) {
      return 'unknown';
    }

    if (isMobile({ ua: userAgent })) {
      return 'mobile';
    }

    return 'desktop';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform.ua]);

  return {
    kind,
  };
};
