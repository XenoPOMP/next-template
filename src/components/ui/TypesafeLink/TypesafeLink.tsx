import type Link from 'next/link';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import type { TypesafeUrl } from '@/types';

export type TypesafeLinkProps<T extends string> = {
  href: T;
} & {
  params: TypesafeUrl<T>;
  queryParams?: Record<string, string>;
};

type LinkProps = FCProps<VariableFC<typeof Link, unknown, 'href'>>;

/**
 * Link component with typesafe params.
 */
export function TypesafeLink<URLString extends string>({
  href,
  params,
  queryParams,
  className,
  children,
  ...props
}: TypesafeLinkProps<URLString> & LinkProps) {
  return <></>;
}
