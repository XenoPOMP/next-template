import { bold } from 'ansi-colors';
import type { PackageJson } from 'type-fest';
import { z } from 'zod';

import packageJson from '../../../package.json';

import { DevLogger } from './logger.ts';
import cwd from './utils/cwd.ts';

const envSchema = z.object({
  ACTOR: z.string().optional(),
  REPO_NAME: z.string().optional(),
});

const env = envSchema.parse(process.env);

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

  DevLogger.end('Cleanup ended. ✨');
})();
