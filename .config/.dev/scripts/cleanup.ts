import { bold } from 'ansi-colors';
import { cp, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { PackageJson } from 'type-fest';
import { z } from 'zod';

import packageJson from '../../../package.json';

import { DevLogger } from './logger.ts';
import cwd from './utils/cwd.ts';
import { deleteFiles } from './utils/deletion.ts';
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

  // Copy all modified files
  await cp(CLEANUP_DIR, cwd(), {
    force: true,
    recursive: true,
  });
  DevLogger.log('Copied modified files');

  // Delete template specific files
  await deleteFiles([
    CLEANUP_DIR,

    // .github folder
    path.join(CLEANUP_DIR, '../', 'workflows/template-cleanup.yml'),
    path.join(CLEANUP_DIR, '../', 'workflows/template-verify.yml'),
    path.join(CLEANUP_DIR, '../', 'ISSUE_TEMPLATE'),

    // from root
    path.join(cwd(), '.dev/docs'),
    path.join(cwd(), 'LICENSE'),
    path.join(cwd(), 'CONTRIBUTING.md'),
    path.join(cwd(), 'TODO.md'),
    path.join(cwd(), 'SECURITY.md'),

    // cleanup script itself
    path.join(cwd(), '.config/.dev/scripts/cleanup.ts'),
  ]);
  DevLogger.log('Deleted temp files');

  DevLogger.end('Cleanup ended. ✨');
})();
