import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useOptimisticMutation } from '@/hooks';

import { TestUI, createTestingComponent } from '@test/assets';

type Response = boolean;
type Error = unknown;
interface MutationVariables {
  itemId: string;
}
type Items = { id: string; name: string }[];
type Likes = { itemId: string }[];
type History = { type: string }[];

// eslint-disable-next-line jsdoc/require-jsdoc
function AdditionalTestComp() {
  // Some local state for our example
  const [history, setHistory] = useState<History>([]);

  useQuery<Items>({
    queryKey: ['items'],
    // eslint-disable-next-line jsdoc/require-jsdoc
    queryFn: async () => [{ id: '12', name: 'sus' }],
  });

  useQuery<Likes>({
    queryKey: ['likes'],
    // eslint-disable-next-line jsdoc/require-jsdoc
    queryFn: async () => [{ itemId: '12' }],
  });

  // Mutation to delete an item and optimistically update data in three locations
  const { mutate: deleteItem } = useOptimisticMutation<
    Response,
    Error,
    MutationVariables,
    // Data types for our optimistic handlers
    [Items | undefined, Likes | undefined, History]
  >({
    // eslint-disable-next-line jsdoc/require-jsdoc
    mutationFn: async _variables => {
      return true;
    },
    // This is where the magic happens
    // eslint-disable-next-line jsdoc/require-jsdoc
    optimistic: variables => {
      return [
        // Remove from items
        {
          // The React Query key to find the cached data
          queryKey: ['items'],
          // Function to modify the cached data
          // eslint-disable-next-line jsdoc/require-jsdoc
          updater: currentData => {
            return currentData?.filter(item => item.id !== variables.itemId);
          },
        },
        // Remove from likes
        {
          queryKey: ['likes'],
          // eslint-disable-next-line jsdoc/require-jsdoc
          updater: currentData => {
            return currentData?.filter(
              item => item.itemId !== variables.itemId,
            );
          },
        },
        // Update some local state by specifying `getData` and `setData`
        // Useful to handle with this hook so it gets rolled back on error
        {
          // eslint-disable-next-line jsdoc/require-jsdoc
          getData: () => history,
          // eslint-disable-next-line jsdoc/require-jsdoc
          setData: data => setHistory(data),
          // eslint-disable-next-line jsdoc/require-jsdoc
          updater: currentData => {
            return [...(currentData || []), { type: 'delete' }];
          },
        },
      ];
    },
  });

  return (
    <TestUI>
      <TestUI.Button
        testButtonAttribute='delete-item'
        onClick={() => {
          deleteItem({
            itemId: '12',
          });
        }}
      />

      <TestUI.Output
        output={JSON.stringify(history)}
        outputAttribute='history-output'
      />
    </TestUI>
  );
}

export const createUseOptimisticMutationTest =
  createTestingComponent(AdditionalTestComp);
