import { initials } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import Image from 'next/image';
import type { FC } from 'react';
import { useMemo } from 'react';

import type {
  DicebearImageProps,
  PartialImageProps,
} from './DicebearImage.props';
import { defaultAvatarOptions } from './DicebearImage.props';

/**
 * @constructor
 *
 * @example
 * <>
 *  <DicebearImage
 *    seed='XenoPOMP'
 *    className={cn('size-full object-cover object-center')}
 *  />
 * </>
 */
export const DicebearImage: FC<DicebearImageProps & PartialImageProps> = ({
  options,
  seed,
  alt,
  ...props
}) => {
  const avatarUri = useMemo(() => {
    const avatar = createAvatar(initials, {
      ...defaultAvatarOptions,
      ...options,
      seed,
    });

    return avatar.toDataUri();
  }, [seed, options]);

  return (
    <Image
      src={avatarUri}
      width={300}
      height={300}
      alt={alt ?? `${seed}\`s avatar image`}
      {...props}
    />
  );
};
