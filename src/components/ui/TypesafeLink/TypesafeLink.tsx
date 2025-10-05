import cn from 'classnames';
import Link from 'next/link';
import { useMemo } from 'react';
import type { FCProps, VariableFC } from 'xenopomp-essentials';

import type { TypesafeUrl } from '@/types';
import { createTypesafeUrl } from '@/utils/misc';

export type TypesafeLinkProps<T extends string> = {
  href: T;
} & {
  params: TypesafeUrl<T>;
  queryParams?: Record<string, string>;
};

type LinkProps = FCProps<VariableFC<typeof Link, unknown, 'href'>>;

/**
 * Link component with typesafe params.
 * @example
 * // /test/pages/1?logLevel=max
 * <TypesafeLink
 *   href='/test/pages/:pageNumber'
 *   params={{
 *     pageNumber: '1',
 *   }}
 *   queryParams={{
 *     logLevel: 'max',
 *   }}
 * >
 *   Go to page 1
 * </TypesafeLink>
 */
export function TypesafeLink<URLString extends string>({
  href,
  params,
  queryParams,
  className,
  children,
  ...props
}: TypesafeLinkProps<URLString> & LinkProps) {
  const handledUrl: string = useMemo(() => {
    return createTypesafeUrl(href, {
      params,
      queryParams,
    });
  }, [href, params, queryParams]);

  return (
    <Link
      href={handledUrl}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
