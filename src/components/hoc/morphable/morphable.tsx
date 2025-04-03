import type { ComponentProps, ElementType, FC } from 'react';
import type { StrictOmit, Undefinable } from 'xenopomp-essentials';

type AsGuard<Props extends Undefinable<string | number | symbol>> =
  Props extends undefined
    ? never
    : Props extends string
      ? ElementType<Partial<Record<Props, any>>>
      : never;

type ExcludeNever<T> = {
  [Key in keyof T as [T[Key]] extends [never] ? never : Key]: T[Key];
};

type RenameField<T, K extends keyof T, Replace extends string> = {
  [Key in keyof T as Key extends K ? Replace : Key]: T[Key];
};

type MorphlingBody<TComp extends ElementType, As> = ComponentProps<TComp> &
  ExcludeNever<{
    as?: As;
  }>;

type SelectiveRequired<T, K extends keyof T> = StrictOmit<T, K> &
  Required<Pick<T, K>>;

type MorphlingProps<TComp extends ElementType, As> = SelectiveRequired<
  RenameField<MorphlingBody<TComp, As>, 'as', 'Comp'>,
  'Comp'
>;

export function morphable<
  TComp extends ElementType,
  ReqProps extends Undefinable<keyof ComponentProps<TComp>>,
  As extends AsGuard<ReqProps> = AsGuard<ReqProps>,
>(baseComp: TComp): FC<MorphlingBody<TComp, As>>;

export function morphable<
  TComp extends ElementType,
  ReqProps extends Undefinable<keyof ComponentProps<TComp>>,
  As extends AsGuard<ReqProps> = AsGuard<ReqProps>,
>(
  baseComp: TComp,
  morphling: FC<MorphlingProps<TComp, As>>,
): FC<MorphlingBody<TComp, As>>;

/** */
export function morphable<
  TComp extends ElementType,
  ReqProps extends Undefinable<keyof ComponentProps<TComp>>,
  As extends AsGuard<ReqProps> = AsGuard<ReqProps>,
>(
  baseComp: TComp,
  morphling?: FC<MorphlingProps<TComp, As>>,
): FC<MorphlingBody<TComp, As>> {
  return ({ as, ...props }) => {
    const Comp = as ?? baseComp;

    if (morphling) {
      return morphling({ Comp, ...props });
    }

    return <Comp {...props} />;
  };
}
