import type { Mock } from 'vitest';

import type { DeepTypeReplace } from '@/__tests__/assets/types';

type StubValue = Mock | (() => Mock) | (() => Promise<Mock>);

/**
 * Represents vi stub object.
 */
export type Stub<T extends object> = DeepTypeReplace<T, StubValue>;
