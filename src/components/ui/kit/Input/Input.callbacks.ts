import type { HTMLInputTypeAttribute } from 'react';
import type { LenientAutocomplete } from 'xenopomp-essentials';

import type { ValidateCallback } from './callbacks';
import { onDateValidate } from './callbacks';

type StrictExtract<T extends string, S extends T> = Extract<T, S>;
type ValidatingTypes = StrictExtract<HTMLInputTypeAttribute, 'date'>;

export const validateCallbacks = new Map<
  LenientAutocomplete<ValidatingTypes> | undefined,
  ValidateCallback
>([['date', onDateValidate]]);
