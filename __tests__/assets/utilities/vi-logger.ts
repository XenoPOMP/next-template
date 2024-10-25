import { green } from 'ansi-colors';

type LogFn = (message?: string) => void;

/**
 * Special debug logger for Vitest testing.
 */
export class ViLogger {
  private static PREFIXES = {
    DEBUG: green('[DEBUG]'),
  };

  /**
   * Creates message with prefix for debug logger.
   * @param prefix
   * @param msg
   * @private
   */
  private static getPrefixedMessage(
    prefix: keyof typeof this.PREFIXES,
    msg?: string,
  ) {
    return [this.PREFIXES[prefix], msg].join(' ');
  }

  static debug: LogFn = (message?: string) => {
    // eslint-disable-next-line no-console
    console.log(this.getPrefixedMessage('DEBUG', message));
  };
}
