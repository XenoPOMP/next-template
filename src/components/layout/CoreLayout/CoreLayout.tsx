import type { FC, PropsWithChildren } from 'react';

import type { CoreLayoutProps } from './CoreLayout.props';

/**
 * Wrapper for core layout. Provides access to fully manageable
 * page layout.
 *
 * @constructor
 *
 * @deprecated Has no functionality.
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

// eslint-disable-next-line deprecation/deprecation
export default CoreLayout;
