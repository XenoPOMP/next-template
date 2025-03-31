import cn from 'classnames';
import { Playwrite_DE_LA } from 'next/font/google';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import type { LogoProps } from './Logo.props';

const font = Playwrite_DE_LA();

/**
 * App`s logo component. Contains link to root
 * page (can be overwritten).
 * @constructor
 */
export const Logo: VariableFC<typeof Link, LogoProps, 'children' | 'href'> = ({
  href = '/',
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(font.className, 'lowercase', className)}
      {...props}
    >
      xenopomp
    </Link>
  );
};
