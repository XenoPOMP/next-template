'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import type { NavbarItemProps } from './NavbarItem.props.ts';

/**
 * @param className
 * @param children
 * @param parentPath
 * @param index       Marks item as index in navbar
 * @param props
 * @constructor
 */
export const NavbarItem: VariableFC<typeof Link, NavbarItemProps> = ({
  className,
  children,
  parentPath,
  index,
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

    if (!index) {
      return href.toString().startsWith(path) && href === path;
    }

    return href.toString().startsWith(path);
  }, [index, props.href, path, parentPath]);

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
