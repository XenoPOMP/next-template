import type { MethodDelegate } from './utils/logger';
import { createMethod } from './utils/logger';

/**
 * class decorator
 */
function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    // eslint-disable-next-line ts/no-unused-expressions
    constructor;
  };
}

/**
 * The purpose of this logger is to write messages
 * when running dev scripts.
 */
@staticImplements<MethodDelegate>()
export class DevLogger {
  /** Send [START] message. */
  static start = createMethod('start');

  /** Send [END] message. */
  static end = createMethod('end');

  /** Send [LOG] message. */
  static log = createMethod('log');

  /** Send [WRN] message. */
  static warn = createMethod('warn');

  /** Send [ERR] message. */
  static error = createMethod('error');

  /** Send [INF] message. */
  static info = createMethod('info');
}
