import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import {
  assertHookRendering,
  createUseOptimisticMutationTest,
  injectMatchMediaMock,
} from '@test/assets';

type Response = boolean;
type Error = unknown;
interface MutationVariables {
  itemId: string;
}
type Items = { id: string; name: string }[];
type Likes = { itemId: string }[];
type History = { type: string }[];

// eslint-disable-next-line jsdoc/require-jsdoc
// const useTestingHook = () => {
//   // Some local state for our example
//   const [history, setHistory] = useState<History>();
//
//   return useOptimisticMutation<
//     Response,
//     Error,
//     MutationVariables,
//     // Data types for our optimistic handlers
//     [Items | undefined, Likes | undefined, History]
//   >({
//     // eslint-disable-next-line jsdoc/require-jsdoc
//     mutationFn: async variables => {
//       return true;
//     },
//     // eslint-disable-next-line jsdoc/require-jsdoc
//     optimistic: variables => {
//       return [
//         // Remove from items
//         {
//           // The React Query key to find the cached data
//           queryKey: ['items'],
//           // Function to modify the cached data
//           // eslint-disable-next-line jsdoc/require-jsdoc
//           updater: currentData => {
//             return currentData?.filter(item => item.id !== variables.itemId);
//           },
//         },
//         // Remove from likes
//         {
//           queryKey: ['likes'],
//           // eslint-disable-next-line jsdoc/require-jsdoc
//           updater: currentData => {
//             return currentData?.filter(
//               item => item.itemId !== variables.itemId,
//             );
//           },
//         },
//         // Update some local state by specifying `getData` and `setData`
//         // Useful to handle with this hook so it gets rolled back on error
//         {
//           // eslint-disable-next-line jsdoc/require-jsdoc
//           getData: () => history,
//           // eslint-disable-next-line jsdoc/require-jsdoc
//           setData: data => setHistory(data),
//           // eslint-disable-next-line jsdoc/require-jsdoc
//           updater: currentData => {
//             return [...(currentData || []), { type: 'delete' }];
//           },
//         },
//       ];
//     },
//   });
// };

describe('useOptimisticMutation', () => {
  injectMatchMediaMock();

  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => 1);
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUseOptimisticMutationTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});
