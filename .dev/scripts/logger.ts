import {
  blueBright,
  green,
  grey,
  red,
  redBright,
  yellow,
  yellowBright,
} from 'ansi-colors';

/**
 * The purpose of this logger is to write messages
 * when running dev scripts.
 */
export class DevLogger {
  private static PREFIXES = {
    start: green('[START]'),
    end: green('[ END ]'),
    log: blueBright('[ LOG ]'),
    error: red('[ ERR ]'),
    warn: yellow('[ WRN ]'),
  };

  /** Generates time label. */
  private static issueTime() {
    const formatDateInteger = (num: number) => (num >= 10 ? num : `0${num}`);

    const current = new Date();

    const hours = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    return grey(
      `[${formatDateInteger(hours)}:${formatDateInteger(minutes)}:${formatDateInteger(seconds)}]`,
    );
  }

  /** Generates logger message with prefix, time etc. */
  private static issueMessage(
    prefix: keyof typeof this.PREFIXES,
    message?: any,
  ) {
    return `${this.PREFIXES[prefix]} ${this.issueTime()} ${message}`;
  }

  /** Send [START] message. */
  static start(message?: any) {
    console.log(this.issueMessage('start', message));
  }

  /** Send [END] message. */
  static end(message?: any) {
    console.log(this.issueMessage('end', message));
  }

  /** Send [LOG] message. */
  static log(message?: any) {
    console.log(this.issueMessage('log', message));
  }

  /** Send [WRN] message. */
  static warn(message?: any) {
    console.log(this.issueMessage('warn', `${yellowBright(message)}`));
  }

  /** Send [ERR] message. */
  static error(message?: any) {
    console.log(this.issueMessage('error', `${redBright(message)}`));
  }
}
