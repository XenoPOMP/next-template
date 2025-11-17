import { red } from 'ansi-colors';
import type { PathLike } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import YAML from 'yaml';

// eslint-disable-next-line jsdoc/require-jsdoc
export async function writeYamlFile<T>(
  filePath: PathLike,
  fun: (prevContent: T) => any,
) {
  const basename = path.basename(filePath.toString());
  if (!basename.includes('yaml') && !basename.includes('yml')) {
    console.error(
      `${red(`Expected \`*.yaml\` or \`*.yml\`, got \`${basename}\``)}`,
    );
    return;
  }

  try {
    const content = await readFile(filePath, {
      encoding: 'utf8',
    });
    const parsed = YAML.parse(content) as T;
    const newContent = fun(parsed);

    await writeFile(filePath, YAML.stringify(newContent, null, 2));
  } catch (error) {
    if ((error as { code?: string }).code === 'ENOENT') {
      console.error(
        `${red(`No such file or directory: ${filePath.toString()}`)}`,
      );
    }
  }
}
