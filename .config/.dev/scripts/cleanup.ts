import { bold } from 'ansi-colors';
import { z } from 'zod';

import { DevLogger } from './logger.ts';

const envSchema = z.object({
  ACTOR: z.string().optional(),
  REPO_NAME: z.string().optional(),
});

const env = envSchema.parse(process.env);

(async () => {
  DevLogger.start('Starting cleanup process...');

  DevLogger.info(`User: ${bold(env.REPO_NAME ?? 'none')}`);
  DevLogger.info(`User: ${bold(env.ACTOR ?? 'none')}`);

  DevLogger.end('Cleanup ended. ✨');
})();
