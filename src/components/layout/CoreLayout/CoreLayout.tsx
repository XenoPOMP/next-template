import type { FC, PropsWithChildren } from 'react';

import type { CoreLayoutProps } from './CoreLayout.props';

/**
 * Wrapper for core layout. Provides access to fully manageable
 * page layout.
 *
 * @param children
 * @constructor
 *
 * @example
 * // Header and footer will be added
 * // automatically
 * <CoreLayout>
 *   <main>
 *     Index page
 *   </main>
 * </CoreLayout>
 */
const CoreLayout: FC<PropsWithChildren<CoreLayoutProps>> = ({ children }) => {
  return <>{children}</>;
};

export default CoreLayout;
