import { env } from '@/utils/env.ts';

import { DEVELOPMENT, PRODUCTION, TESTING } from '@app/constants/node-env';

// eslint-disable-next-line jsdoc/require-jsdoc
const createCheck = <C extends string>(expected: C) => {
  return () => expected === env.NODE_ENV;
};

export const isDevelopment = createCheck(DEVELOPMENT);
export const isProduction = createCheck(PRODUCTION);
export const isTest = createCheck(TESTING);
