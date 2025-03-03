import type { VariableFC } from 'xenopomp-essentials';

import { Stack } from '@/components/ui';

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
