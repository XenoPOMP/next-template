import { red } from 'ansi-colors';
import type { PathLike } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import type { PackageJson } from 'type-fest';

// eslint-disable-next-line jsdoc/require-jsdoc
export async function writePackageJson(
  packageJsonPath: PathLike,
  fun: (prevContent: PackageJson) => PackageJson,
) {
  try {
    const content = await readFile(packageJsonPath, {
      encoding: 'utf8',
    });
    const parsed: PackageJson = JSON.parse(content) as PackageJson;
    const newContent: PackageJson = fun(parsed);

    await writeFile(packageJsonPath, JSON.stringify(newContent, null, 2));
  } catch (error) {
    if ((error as { code?: string }).code === 'ENOENT') {
      console.error(
        `${red(`No such file or directory: ${packageJsonPath.toString()}`)}`,
      );
    }
  }
}
