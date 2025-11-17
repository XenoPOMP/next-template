import { issueMessage } from '../../logger';
import type { DevLoggerMethod, MethodsType } from '../../logger';

// eslint-disable-next-line jsdoc/require-jsdoc
export function createMethod(prefix: MethodsType): DevLoggerMethod {
  return (message?: any) => console.log(issueMessage(prefix, message));
}
