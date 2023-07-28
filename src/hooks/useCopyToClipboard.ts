'use client';

import { useCallback, useEffect } from 'react';

import useBoolean from '@/src/hooks/useBoolean';

/**
 * This hook allows copy text to clipboard.
 *
 * **Not working inside server components!!!**
 */
const useCopyToClipboard = (): {
  isCopied: boolean;
  copy: (text: string) => void;
} => {
  const [isCopied, _, setIsCopied] = useBoolean(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
      })
      .catch(err => {
        console.error(`Unable to copy text: ${err}`);
      });
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return {
    isCopied,
    copy,
  };
};

export default useCopyToClipboard;
