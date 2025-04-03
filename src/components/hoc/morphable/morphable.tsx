import type { ComponentProps, ElementType, FC } from 'react';
import type { Undefinable } from 'xenopomp-essentials';

type AsGuard<Props extends Undefinable<string | number | symbol>> =
  Props extends undefined
    ? never
    : Props extends string
      ? ElementType<Partial<Record<Props, any>>>
      : never;

type ExcludeNever<T> = {
  [Key in keyof T as [T[Key]] extends [never] ? never : Key]: T[Key];
};

/**
 *
 */
export function morphable<
  TComp extends ElementType,
  ReqProps extends Undefinable<keyof ComponentProps<TComp>>,
  As extends AsGuard<ReqProps> = AsGuard<ReqProps>,
>(
  baseComp: TComp,
): FC<
  ComponentProps<TComp> &
    ExcludeNever<{
      as?: As;
    }>
> {
  return ({ as, ...props }) => {
    const Comp = as ?? baseComp;
    return <Comp {...props} />;
  };
}
