import { UiContainerProps } from '@/src/components/ui/UiContainer/UiContainer.props';

export interface UiGridProps
  extends Partial<{
      columns: number;
      rows: number;
      gap: number | string;
    }>,
    UiContainerProps {}
