import type { FcProps, VariableFC } from '@xenopomp/advanced-types';

import type { ButtonVariantsType } from './Button.variants.ts';

export interface ButtonProps
  extends FcProps<VariableFC<'button', unknown, 'ref'>>,
    ButtonVariantsType {
  asChild?: boolean;
}
