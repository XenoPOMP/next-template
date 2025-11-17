import { intersect } from '@voxpelli/semver-set';
import c from 'ansi-colors';
import deepmerge from 'deepmerge';
import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import type { PackageJson } from 'type-fest';

import { DevLogger } from './logger';
import { writePackageJson } from './utils/write-package-json';

const EXTRA_SEMVERS: string[] = ['<25'];

(async () => {
  DevLogger.start('Calculating Node.js engine semver from dependencies');

  const filenames = await readdir(
    path.join(__dirname, '../../../node_modules'),
    {
      recursive: true,
      withFileTypes: true,
    },
  );
  const semvers = filenames
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
        DevLogger.warn(`Error handling \`${f.filename}\` (${e})`);
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

  const collapsedSemver: string | null = intersect(
    ...semvers,
    ...EXTRA_SEMVERS,
  );
  if (!collapsedSemver) {
    DevLogger.error(
      c.yellow('Calculation seems to be null. Check the generation script.'),
    );
    return;
  }

  await writePackageJson(
    path.join(__dirname, '../../../package.json'),
    prev => {
      if (prev.engines?.node !== collapsedSemver) {
        DevLogger.log(
          c.gray(
            `Previous node engine requirement was ${c.green.bold(prev.engines?.node ?? 'unset')}`,
          ),
        );

        DevLogger.log(
          c.gray(
            `Set node engine requirement to ${c.green.bold(collapsedSemver)}`,
          ),
        );
      } else {
        DevLogger.warn(c.yellow('Nothing changed.'));
      }

      return deepmerge(prev, {
        engines: {
          node: collapsedSemver,
        },
      });
    },
  );

  DevLogger.end('Calculation proceeded.');
})();
