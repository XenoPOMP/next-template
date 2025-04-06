import { bold } from 'ansi-colors';
import { closeSync, existsSync } from 'node:fs';
import { open, readFile, writeFile } from 'node:fs/promises';
import * as path from 'node:path';

import { envSpecialSymbols } from './data/env-special-symbols.ts';
/** This script updates .env.example programmatically. */
import { DevLogger } from './logger.ts';
import cwd from './utils/cwd.ts';

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
  // eslint-disable-next-line regexp/no-useless-flag
  const lines = envContent.split(/\n/gi).map(item => {
    // Line does not contain any variables.
    // eslint-disable-next-line regexp/no-useless-flag, regexp/no-useless-escape, regexp/strict, regexp/no-unused-capturing-group
    if (!/(^\w+=(\".*)\"$)|(^\w+=(.*)$)/gi.test(item)) {
      return item;
    }

    // eslint-disable-next-line regexp/no-useless-flag, regexp/no-empty-lookarounds-assertion,regexp/optimal-lookaround-quantifier
    const [name] = item.split(/(((?<=\w+=")(.*)(?="))|((?<=\w+=)(.*)(?=)))/gi);
    // eslint-disable-next-line regexp/no-useless-flag
    const normalizedName = name?.replace(/=/gi, '');
    let assignment: string | undefined =
      // eslint-disable-next-line regexp/no-useless-flag
      `"YOUR_${name?.toUpperCase().replace(/=$/gi, '')}"`;

    // Check if name is in special symbols` list
    if (normalizedName && envSpecialSymbols.has(normalizedName)) {
      assignment = `"${envSpecialSymbols.get(normalizedName)}"`;
    }

    return `${name}${assignment}`;
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
