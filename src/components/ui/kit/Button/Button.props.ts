import type { FcProps, VariableFC } from 'xenopomp-essentials/types';

import type { ButtonVariantsType } from './Button.variants.ts';

export interface ButtonProps
  extends FcProps<VariableFC<'button', unknown>>,
    ButtonVariantsType {}
