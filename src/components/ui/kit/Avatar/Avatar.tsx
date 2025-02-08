import cn from 'classnames';
import { User } from 'lucide-react';
import Image from 'next/image';
import type { VariableFC } from 'xenopomp-essentials';

import { DicebearImage } from '@/components/ui/kit';

import type { AvatarProps } from './Avatar.props';

/**
 * Avatar image with dicebear-image fallback.
 *
 * @param src
 * @param placeholder
 * @param className
 * @param props
 * @constructor
 *
 * @example
 * // Renders default icon if neither placeholder nor src are defined.
 * <Avatar {...SHARED_PROPS} />
 *
 * // If use with src, will render image as avatar.
 * <Avatar
 *   {...SHARED_PROPS}
 *   src={catImg}
 * />
 *
 * // If src is not defined but placeholder is, renders Dicebear image.
 * <Avatar
 *   {...SHARED_PROPS}
 *   placeholder='XenoPOMP'
 * />
 */
export const Avatar: VariableFC<'div', AvatarProps, 'children'> = ({
  src,
  placeholder,
  className,
  ...props
}) => {
  const altText = `${placeholder ?? 'User'}\`s avatar image`;
  const imageCn = 'size-full object-cover object-center';

  return (
    <div
      className={cn(
        'flex-center aspect-square size-[2.5rem] cursor-pointer select-none overflow-hidden rounded-full',
        className,
      )}
      aria-roledescription='avatar'
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={altText}
          width={300}
          height={300}
          className={cn(imageCn)}
        />
      ) : (
        <>
          {placeholder ? (
            <>
              <DicebearImage
                seed={placeholder}
                className={cn(imageCn)}
              />
            </>
          ) : (
            <>
              <User color='currentColor' />
            </>
          )}

          <div className={cn('sr-only')}>{altText}</div>
        </>
      )}
    </div>
  );
};

Avatar({ src: '' });
