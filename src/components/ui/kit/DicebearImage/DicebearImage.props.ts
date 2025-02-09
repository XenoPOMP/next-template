import type { initials } from '@dicebear/collection';
import type { createAvatar } from '@dicebear/core';
import type Image from 'next/image';
import type { ComponentProps } from 'react';
import type {
  Defined,
  SelectivePartial,
  StrictOmit,
  Undefinable,
} from 'xenopomp-essentials';

type CreateAvatarOptions<T extends object> = Parameters<
  typeof createAvatar<T>
>[1];

export type DicebearImageProps = {
  options?: Undefinable<
    StrictOmit<Defined<CreateAvatarOptions<initials.Options>>, 'seed'>
  >;
} & Required<Pick<Defined<CreateAvatarOptions<initials.Options>>, 'seed'>>;

export type PartialImageProps = SelectivePartial<
  StrictOmit<ComponentProps<typeof Image>, 'src' | 'width' | 'height'>,
  'alt'
>;

export const defaultAvatarOptions: Defined<DicebearImageProps['options']> = {
  flip: false,
  rotate: 0,
  scale: 80,
  radius: 0,
  backgroundType: ['solid'],
  fontFamily: ['Verdana'],
  fontSize: 50,
  chars: 2,
  fontWeight: 400,
};
