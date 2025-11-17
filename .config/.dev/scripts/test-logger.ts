import { DevLogger } from './logger';
import type { MethodsType } from './utils/logger';
import { PREFIXES } from './utils/logger';

DevLogger.start('This is a testing only script.');

Object.keys(PREFIXES)
  .map(key => key as MethodsType)
  .filter(key => !(['start', 'end'] as MethodsType[]).includes(key))
  .forEach(key => {
    DevLogger[key](`This is example of calling DevLogger.${key}`);
  });

DevLogger.end('End of test script.');
