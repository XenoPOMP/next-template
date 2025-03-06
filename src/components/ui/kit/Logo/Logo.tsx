import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import type { LogoProps } from './Logo.props';

/**
 * App`s logo component. Contains link to root
 * page (can be overwritten).
 * @constructor
 */
export const Logo: VariableFC<typeof Link, LogoProps, 'children' | 'href'> = ({
  href = '/',
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
    >
      Logo
    </Link>
  );
};
