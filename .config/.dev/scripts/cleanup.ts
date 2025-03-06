import { bold } from 'ansi-colors';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { PackageJson } from 'type-fest';
import { z } from 'zod';

import packageJson from '../../../package.json';

import { DevLogger } from './logger.ts';
import cwd from './utils/cwd.ts';
import { sed } from './utils/sed.ts';

const envSchema = z.object({
  ACTOR: z.string().optional(),
  REPO_NAME: z.string().optional(),
});

const env = envSchema.parse(process.env);

const CLEANUP_DIR = path.join(cwd(), '.github/template-cleanup');

(async () => {
  DevLogger.start('Starting cleanup process...');

  DevLogger.info(`Repo: ${bold(env.REPO_NAME ?? 'none')}`);
  DevLogger.info(`User: ${bold(env.ACTOR ?? 'none')}`);

  DevLogger.info(`Starting to cleaning at ${bold(cwd())}`);

  const packageJsonContent = structuredClone<PackageJson>(packageJson);

  // Update scripts
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { cleanup, ...scripts } = packageJsonContent.scripts ?? {};
  packageJsonContent.scripts = scripts;

  // Update author info
  packageJsonContent.author = env.ACTOR;
  packageJsonContent.name = env.REPO_NAME;
  packageJsonContent.repository = `https://github.com/${env.ACTOR}/${env.REPO_NAME}`;
  packageJsonContent.version = '0.0.0';

  // Create file at cleanup dir
  await writeFile(
    path.join(CLEANUP_DIR, 'package.json'),
    JSON.stringify(packageJsonContent, null, 2),
  );
  DevLogger.log(`Generated ${bold('package.json')} at cleanup dir`);

  await sed(CLEANUP_DIR, {
    pattern: /%NAME%/g,
    replace: env.REPO_NAME ?? '',
  });

  await sed(CLEANUP_DIR, {
    pattern: /%ACTOR%/g,
    replace: env.ACTOR ?? '',
  });

  DevLogger.log(`Changed ${bold('author info')} at cleanup dir`);

  DevLogger.end('Cleanup ended. ✨');
})();
