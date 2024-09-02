import { PathLike, existsSync, unlinkSync } from 'fs';

/**
 * Deletes file synchronously.
 *
 * @param path
 */
const deleteFileSync = (path: PathLike) => {
  if (!existsSync(path)) {
    return;
  }

  unlinkSync(path);
};

const deleteDirSync = (path: PathLike) => {
  return deleteFileSync(path);
};

export { deleteFileSync, deleteDirSync };
