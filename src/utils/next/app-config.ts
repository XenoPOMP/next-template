import mdxWrapper from '@next/mdx';
import type { NextConfig } from 'next';

type NextConfigWrapper = (init: NextConfig) => NextConfig;

interface ConfigOptions {
  /**
   * Enables MDX pre-processor.
   * @default true
   */
  mdx?: boolean;

  /** Enables PWA support. */
  pwa?: boolean;
}

/**
 * Wraps config with resolved config-wrapper.
 * @param cfg
 * @param wrapper
 * @example
 * const defaultConfig = applyWrapper(defaultConfig, mdxWrapper());
 */
function applyWrapper(cfg: NextConfig, wrapper: NextConfigWrapper) {
  return wrapper(cfg);
}

/**
 *
 * @param defaultConfig
 * @param options
 */
export const globalNextConfig = (
  defaultConfig: NextConfig,
  options?: ConfigOptions,
): NextConfig => {
  // Default options
  const useMdx = options?.mdx ?? true;
  // eslint-disable-next-line unused-imports/no-unused-vars
  const usePwa = options?.pwa ?? false;

  if (useMdx) {
    defaultConfig = applyWrapper(defaultConfig, mdxWrapper());
  }

  return defaultConfig;
};
