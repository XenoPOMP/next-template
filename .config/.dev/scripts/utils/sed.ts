import type { PathLike } from 'node:fs';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';

interface IOptions {
  pattern: RegExp;
  replace: string;
}

/**
 * Replaces all pattern matches in directory.
 * @param path
 * @param options          function options
 * @param options.pattern  regexp to find and replace
 * @param options.replace  replacement
 */
export const sed = async (path: PathLike, options: IOptions) => {
  const { pattern, replace } = options;
  const files = await readdir(path);

  for (const file of files) {
    const pathToFile = nodePath.join(path.toString(), file);
    let content = await readFile(pathToFile, {
      encoding: 'utf8',
    });

    content = content.replace(pattern, replace);

    await writeFile(pathToFile, content);
  }
};
