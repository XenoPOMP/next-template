import type { VariableFC } from 'xenopomp-essentials';

import { Stack } from '@/components/ui';

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
