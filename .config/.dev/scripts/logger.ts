import { grey } from 'ansi-colors';

import { PREFIXES } from './utils/logger/data';

export type MethodsType = 'start' | 'end' | 'log' | 'error' | 'warn' | 'info';

/**
 * The purpose of this logger is to write messages
 * when running dev scripts.
 */
export class DevLogger {
  /** Generates time label. */
  private static issueTime() {
    /** Formats date integer to match pattern X => 0X. */
    const formatDateInteger = (num: number): string =>
      num.toString().padStart(2, '0');

    const current = new Date();

    const hours = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    return grey(
      `[${formatDateInteger(hours)}:${formatDateInteger(minutes)}:${formatDateInteger(seconds)}]`,
    );
  }

  /** Generates prefix with correct length. */
  private static issuePrefix(prefix: MethodsType): string {
    const longestPrefix =
      Object.values(PREFIXES)
        .map(v => v.raw)
        .sort((a, b) => b.length - a.length)[0]?.length ?? 0;

    const { raw, color } = PREFIXES[prefix];
    return color(raw.padStart(longestPrefix, ' '));
  }

  /** Generates logger message with prefix, time etc. */
  private static issueMessage(prefix: MethodsType, message?: any) {
    return `${this.issuePrefix(prefix)} ${this.issueTime()} ${message}`;
  }

  private static createMethod(prefix: MethodsType) {
    return (message?: any) => console.log(this.issueMessage(prefix, message));
  }

  /** Send [START] message. */
  static start = this.createMethod('start');

  /** Send [END] message. */
  static end = this.createMethod('end');

  /** Send [LOG] message. */
  static log = this.createMethod('log');

  /** Send [WRN] message. */
  static warn = this.createMethod('warn');

  /** Send [ERR] message. */
  static error = this.createMethod('error');

  /** Send [INF] message. */
  static info = this.createMethod('info');
}
