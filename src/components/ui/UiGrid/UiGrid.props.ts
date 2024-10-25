import type { ComponentProps } from 'react';

import type { UiContainer } from '@/src/components/ui';
import type { UiContainerProps } from '@/src/components/ui/UiContainer/UiContainer.props';

export interface UiGridProps
  extends Partial<{
      columns: number;
      rows: number;
      gap: number | string;
    }>,
    UiContainerProps,
    ComponentProps<typeof UiContainer> {}
