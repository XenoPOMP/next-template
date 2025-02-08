import cn from 'classnames';
import { User } from 'lucide-react';
import Image from 'next/image';
import type { VariableFC } from 'xenopomp-essentials';

import { DicebearImage } from '@/components/ui/kit';

import type { AvatarProps } from './Avatar.props';

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
        'flex-center size-[2.5rem] cursor-pointer select-none overflow-hidden rounded-full',
        className,
      )}
      aria-roledescription='avatar'
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={altText}
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
