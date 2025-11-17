import type { MethodsType } from '../../logger';
import { PREFIXES } from '../../logger';

/** Generates prefix with correct length. */
export function issuePrefix(prefix: MethodsType): string {
  const longestPrefix =
    Object.values(PREFIXES)
      .map(v => v.raw)
      .sort((a, b) => b.length - a.length)[0]?.length ?? 0;

  const { raw, color } = PREFIXES[prefix];
  return color(raw.padStart(longestPrefix, ' '));
}
