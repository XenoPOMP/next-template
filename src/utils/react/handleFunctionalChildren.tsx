import type { ReactNode } from 'react';
import type { FunctionalChildren } from 'xenopomp-essentials/types';

/**
 * Handle functional children with function interface.
 *
 * @param children
 * @param args
 *
 * @example
 * const result = handleFunctionalChildren(
 *   ({ close }: { close: () => void }) => (
 *     <button onClick={close}>Click on me</button>
 *   ),
 *   {
 *     close: () => {},
 *   },
 * );
 *
 * const otherResult = handleFunctionalChildren(<button>Click on me</button>);
 */
export const handleFunctionalChildren = <Args extends any[] = unknown[]>(
  children?: FunctionalChildren<Args>,
  ...args: Args
): ReactNode => {
  if (typeof children !== 'function') {
    return children;
  }

  return children(...args);
};
