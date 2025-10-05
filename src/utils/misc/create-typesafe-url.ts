import type { TypesafeLinkProps } from '@/components/ui';

/**
 * Binds typesafe params to URL string.
 * @param href
 * @param options
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

  try {
    // Try using URL constructor
    const url: URL = new URL(resultHref);
    const searchParams = url.searchParams;

    // Bind query params
    Object.entries(queryParams ?? {}).forEach(
      ([queryParamName, queryParamValue]) => {
        searchParams.set(queryParamName, queryParamValue);
      },
    );

    return url.toString();
  } catch {
    // URL constructor failed. Relative path detected.
    const searchParams = new URLSearchParams();

    // Bind query params
    Object.entries(queryParams ?? {}).forEach(
      ([queryParamName, queryParamValue]) => {
        searchParams.set(queryParamName, queryParamValue);
      },
    );

    return `${resultHref}?${searchParams.toString()}`;
  }
}
