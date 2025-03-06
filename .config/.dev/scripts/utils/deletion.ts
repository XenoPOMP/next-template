import { type PathLike, existsSync, unlinkSync } from 'node:fs';

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

/** Synchronously deletes directory and checks if it already exists. */
const deleteDirSync = (path: PathLike) => {
  return deleteFileSync(path);
};

export { deleteFileSync, deleteDirSync };
