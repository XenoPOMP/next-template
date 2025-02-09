import type Image from 'next/image';
import type { ComponentProps } from 'react';

type NextImgSrc = Pick<ComponentProps<typeof Image>, 'src'>;

type Src = Partial<NextImgSrc> & {
  placeholder?: string;
};

export type AvatarProps = Src;
