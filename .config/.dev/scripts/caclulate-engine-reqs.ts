import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import type { PackageJson } from 'type-fest';

(async () => {
  const filenames = await readdir(
    path.join(__dirname, '../../../node_modules'),
    {
      recursive: true,
      withFileTypes: true,
    },
  );
  const packageJsons = filenames
    .filter(file => path.basename(file.name) === 'package.json')
    .filter(f => f.isFile())
    .map(f => path.join(f.parentPath, f.name))
    .map(filename => ({
      filename,
      content: readFileSync(filename, {
        encoding: 'utf8',
      }),
    }))
    .map(f => {
      try {
        const parsedJson = JSON.parse(f.content) as PackageJson;

        return {
          filename: f.filename,
          content: parsedJson,
        };
      } catch (e) {
        console.warn(`Error handling \`${f.filename}\` (${e})`);
        return undefined;
      }
    })
    .filter(f => f !== undefined)
    .map(file => ({
      filename: file.filename,
      nodeEngines: file.content.engines?.node,
    }))
    .filter(file => file.nodeEngines !== undefined)
    .map(file => file.nodeEngines!);

  console.log(packageJsons);
})();
