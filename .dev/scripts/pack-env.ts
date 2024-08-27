import { bold } from 'ansi-colors';
import { closeSync, existsSync } from 'fs';
import * as path from 'path';

import { open, readFile, writeFile } from 'fs/promises';

/** This script updates .env.example programmatically. */
import { DevLogger } from './logger';
import cwd from './utils/cwd';

// Targets` names
const TARGET = '.env';
const EXAMPLE_TARGET = '.env.example';

(async () => {
  DevLogger.start(
    `${bold(EXAMPLE_TARGET)} will be created from ${bold(TARGET)}`,
  );

  // Start searching for .env file.

  DevLogger.log(`Looking for ${bold(TARGET)} file in "${cwd()}"`);

  // Target file does not exist
  if (!existsSync(path.join(cwd(), TARGET))) {
    DevLogger.error(`${bold(TARGET)} does not exist.`);
    return;
  }

  /** Read target content as text. */
  const envContent = await readFile(path.join(cwd(), TARGET), {
    encoding: 'utf-8',
  });
  /** Process lines to change sensitive data. */
  const lines = envContent.split(/\n/gi).map(item => {
    // Line does not contain any variables.
    if (!/(^\w+=(\".*)\"$)|(^\w+=(.*)$)/gi.test(item)) {
      return item;
    }

    const [name] = item.split(/(((?<=\w+=")(.*)(?="))|((?<=\w+=)(.*)(?=)))/gi);

    return `${name}"YOUR_${name?.toUpperCase().replace(/=$/gi, '')}"`;
  });

  // Check if output file exists
  if (!existsSync(path.join(cwd(), EXAMPLE_TARGET))) {
    DevLogger.warn(`${bold(EXAMPLE_TARGET)} does not exist. Creating it.`);
    const file = await open(path.join(cwd(), EXAMPLE_TARGET), 'w');
    closeSync(file.fd);
  }

  // Update file
  await writeFile(
    path.join(path.join(cwd(), EXAMPLE_TARGET)),
    lines.join('\n'),
  );

  DevLogger.end(`${bold('.env.example')} has been successfully updated.`);
})();
