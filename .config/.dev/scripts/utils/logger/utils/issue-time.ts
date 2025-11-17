import { grey } from 'ansi-colors';

/** Generates time label. */
export function issueTime() {
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
