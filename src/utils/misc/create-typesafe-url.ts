import type { TypesafeLinkProps } from '@/components/ui';

// eslint-disable-next-line jsdoc/require-jsdoc
function tryCreatingUrl(str: string): URL | undefined {
  try {
    return new URL(str);
  } catch {
    return undefined;
  }
}

/**
 * Binds typesafe params to URL string.
 */
export function createTypesafeUrl<T extends string>(
  href: T,
  { params, queryParams }: Omit<TypesafeLinkProps<T>, 'href'>,
): string {
  let resultHref: string = href;

  // Bind all path params
  Object.entries(params).forEach(([paramName, paramValue]) => {
    resultHref = resultHref.replace(`:${paramName}`, paramValue);
  });

  // Try creating url from string
  const url = tryCreatingUrl(resultHref);
  // We can optionally use safe search params from URL
  const searchParams = url?.searchParams ?? new URLSearchParams();

  // Bind query params
  Object.entries(queryParams ?? {}).forEach(
    ([queryParamName, queryParamValue]) => {
      searchParams.set(queryParamName, queryParamValue);
    },
  );

  // Convert existing URL to string
  if (url) return url.toString();
  // Create URL string manually
  return `${resultHref}?${searchParams.toString()}`;
}
