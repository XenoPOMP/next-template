import * as path from 'node:path';

/**
 * Returns source directory of lib.
 */
const appSource = (): string => {
  return path.join(path.dirname(require.main?.filename ?? ''), '../');
};

export default appSource;
