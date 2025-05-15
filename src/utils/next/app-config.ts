import mdxWrapper from '@next/mdx';
import withSerwistInit from '@serwist/next';
import type { NextConfig } from 'next';

type NextConfigWrapper = (init: NextConfig) => NextConfig;
type SerwistOptions = Parameters<typeof withSerwistInit>[0];

interface ConfigOptions {
  /**
   * Enables MDX pre-processor.
   * @default true
   */
  mdx?: boolean;

  /** Enables service workers support. */
  serwist?: false | SerwistOptions;
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
  const serwist = options?.serwist !== undefined ? options.serwist : false;

  if (useMdx) {
    defaultConfig = applyWrapper(defaultConfig, mdxWrapper());
  }

  if (serwist !== false) {
    const withSerwist = withSerwistInit(serwist);
    defaultConfig = applyWrapper(defaultConfig, withSerwist);
  }

  return defaultConfig;
};
