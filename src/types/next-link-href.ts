import type Link from 'next/link';
import type { ComponentProps } from 'react';

/**
 * Represents Link.href from 'next/link'.
 */
export type NextLinkHref = ComponentProps<typeof Link>['href'];
