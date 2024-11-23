'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import type { NavbarItemProps } from './NavbarItem.props.ts';

export const NavbarItem: VariableFC<typeof Link, NavbarItemProps> = ({
  className,
  children,
  parentPath,
  ...props
}) => {
  const path = usePathname();

  const isActivePath = useMemo(() => {
    const href = props.href;

    if (href === '/') {
      return href === path;
    }

    /** Check if target url is nested inside parent url. */
    if (parentPath) {
      return path?.startsWith(parentPath.toString());
    }

    return href.toString().startsWith(path);
  }, [props.href, path, parentPath]);

  return (
    <Link
      className={cn(className)}
      data-is-active={isActivePath}
      {...props}
    >
      {children}
    </Link>
  );
};
