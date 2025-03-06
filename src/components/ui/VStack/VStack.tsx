import type { VariableFC } from 'xenopomp-essentials';

import { Stack } from '@/components/ui';

/**
 * {@link Stack} component with vertical orientation.
 * @param props
 * @constructor
 */
export const VStack: VariableFC<typeof Stack, unknown, 'orientation'> = ({
  ...props
}) => {
  return (
    <Stack
      orientation='vertical'
      {...props}
    />
  );
};
