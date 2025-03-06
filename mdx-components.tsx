import type { MDXComponents } from 'mdx/types';

/**
 * Allows to make custom components for parsed MDX.
 * @param components
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
