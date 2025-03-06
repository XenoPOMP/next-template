import type { VariableFC } from 'xenopomp-essentials';

import { Stack } from '@/components/ui';

/**
 * {@link Stack} component with horizontal orientation.
 * @param props
 * @constructor
 */
export const HStack: VariableFC<typeof Stack, unknown, 'orientation'> = ({
  ...props
}) => {
  return (
    <Stack
      orientation='horizontal'
      {...props}
    />
  );
};
