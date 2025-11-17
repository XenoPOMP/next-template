import { intersect } from '@voxpelli/semver-set';
import c from 'ansi-colors';
import axios from 'axios';
import deepmerge from 'deepmerge';
import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import type { PackageJson } from 'type-fest';
import { z } from 'zod';

import { DevLogger } from './logger';
import { writePackageJson } from './utils/write-package-json';

// eslint-disable-next-line jsdoc/require-jsdoc
const ignoreVersion = (version: string): string => `<${version} || >${version}`;

// eslint-disable-next-line jsdoc/require-jsdoc
function ltsOnly(): string[] {
  const list: string[] = [];

  for (const num in Array.from({ length: 30 })) {
    const idx = +num + 1;

    if (idx % 2 !== 0) {
      list.push(ignoreVersion(idx.toString()));
    }
  }

  return list;
}

// eslint-disable-next-line jsdoc/require-jsdoc
async function parseLatestNodeVersion(): Promise<string | undefined> {
  const meta = await axios.get('https://nodejs.org/dist/index.json');
  const schema = z.array(
    z.object({
      version: z.string(),
    }),
  );
  const parsed = schema.parse(meta.data);
  const counted = parsed
    .map(i => ({
      version: i.version.replace(/^v/, ''),
      parts: i.version.replace(/^v/, '').split('.'),
    }))
    .map(({ version, parts: [major, minor, patch] }) => ({
      version,
      count: +major! * 100 + +minor! * 10 + +patch!,
    }))
    .sort((a, b) => b.count - a.count)
    .at(0)?.version;

  return counted;
}

(async () => {
  const LATEST_NODE_VERSION = await parseLatestNodeVersion();
  const EXTRA_SEMVERS: string[] = [
    ...ltsOnly(),
    LATEST_NODE_VERSION ? `<${LATEST_NODE_VERSION}` : undefined,
  ].filter(s => s !== undefined);

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
