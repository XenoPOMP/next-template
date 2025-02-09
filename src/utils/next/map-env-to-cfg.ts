import type { NextConfig } from 'next';

import { env } from '@/utils/env';

import { DOCKER } from '@app/constants/node-env';

// Maps env variables to config settings
export const mapEnvToCfg = (config: NextConfig): NextConfig => {
  const clone = structuredClone(config);
  const nodeEnv = env.NODE_ENV;

  return {
    ...clone,
    output: nodeEnv === DOCKER ? 'standalone' : undefined,
  };
};
