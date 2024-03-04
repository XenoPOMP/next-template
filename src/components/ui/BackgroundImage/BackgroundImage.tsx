import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';

import { type BackgroundImageProps } from './BackgroundImage.props';

/**
 * This component represents background image.
 *
 * Has to be placed inside relative block.
 *
 * @param className
 * @param objectFit
 * @param props
 * @constructor
 */
const BackgroundImage: VariableFC<
  typeof Image,
  BackgroundImageProps,
  'children'
> = ({ className, objectFit = 'cover', ...props }) => {
  return (
    <Image
      className={cn('z-[-2]', className)}
      {...props}
      style={{
        objectFit,
      }}
    />
  );
};

export default BackgroundImage;
