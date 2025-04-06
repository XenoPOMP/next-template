import type { PathLike } from 'node:fs';
import { existsSync, unlinkSync } from 'node:fs';
import { rm } from 'node:fs/promises';

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

/**
 * Deletes file asynchronously.
 * @param path
 */
export const deleteFile = async (path: PathLike) => {
  if (!existsSync(path)) {
    return;
  }

  await rm(path, {
    force: true,
    recursive: true,
  });
};

/**
 * Deletes several files asynchronously.
 * @param paths
 */
export const deleteFiles = async (paths: PathLike[]) => {
  for (const path of paths) {
    await deleteFile(path);
  }
};

/** Synchronously deletes directory and checks if it already exists. */
const deleteDirSync = (path: PathLike) => {
  return deleteFileSync(path);
};

export { deleteFileSync, deleteDirSync };
