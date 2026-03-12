import { paraglideWebpackPlugin } from '@inlang/paraglide-js';
import mdxWrapper from '@next/mdx';
import withSerwistInit from '@serwist/next';
import type { NextConfig } from 'next';

type NextConfigWrapper = (init: NextConfig) => NextConfig;
type SerwistOptions = Parameters<typeof withSerwistInit>[0];

/**
 * This type definition excludes some fields, that are defined in app-config.ts file.
 */
export type StrippedNextConfig = Omit<NextConfig, 'webpack'>;

interface ConfigOptions {
  /**
   * Enables MDX pre-processor.
   * @default true
   */
  mdx?: boolean;

  /** Enables PWA support. */
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
  defaultConfig: StrippedNextConfig,
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

  // Extend Webpack here
  defaultConfig = Object.assign(defaultConfig, {
    // eslint-disable-next-line jsdoc/require-jsdoc
    webpack: (config: any) => {
      config.plugins.push(
        paraglideWebpackPlugin({
          outdir: './src/paraglide',
          project: './project.inlang',
          // Maybe, return 'url' strategy here
          strategy: ['cookie', 'baseLocale'],
        }),
      );
    },
  });

  return defaultConfig;
};
