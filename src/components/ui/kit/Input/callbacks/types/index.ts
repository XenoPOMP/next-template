import type { ComponentProps } from 'react';
import type { Defined } from 'xenopomp-essentials';

type EventType = Parameters<Defined<ComponentProps<'input'>['onChange']>>[0];

export type ValidateCallback = (
  prevValue: string | number | readonly string[] | undefined,
  event: EventType,
) => boolean;
