import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';

import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';

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
const CoreLayout: FC<PropsWith<'children', CoreLayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default CoreLayout;
