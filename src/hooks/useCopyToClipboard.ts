'use client';

import { useClipboard } from 'use-clipboard-copy';

/**
 * This hook allows copy text to clipboard.
 *
 * @deprecated Use **useClipboard** from `'use-clipboard-copy'` instead
 */
const useCopyToClipboard = useClipboard;

// eslint-disable-next-line deprecation/deprecation
export default useCopyToClipboard;
