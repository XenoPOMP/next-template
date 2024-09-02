import { existsSync, mkdirSync } from 'fs';

const createDirSync: typeof mkdirSync = (path, options) => {
  if (existsSync(path)) {
    return;
  }

  return mkdirSync(path, options);
};

export { createDirSync };
