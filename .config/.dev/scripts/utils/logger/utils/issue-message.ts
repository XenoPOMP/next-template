import { issuePrefix, issueTime } from '../../logger';
import type { MethodsType } from '../../logger';

/** Generates logger message with prefix, time etc. */
export function issueMessage(prefix: MethodsType, message?: any) {
  return [issueTime(), issuePrefix(prefix), message].join(' ');
}
