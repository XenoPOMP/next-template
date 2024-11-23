import type Link from 'next/link';
import type { ComponentProps } from 'react';

export interface NavbarItemProps {
  parentPath?: ComponentProps<typeof Link>['href'];
}
