import cn from 'classnames';
import type { LucideProps } from 'lucide-react';
import { Loader } from 'lucide-react';
import type { SVGMotionProps } from 'motion/react';
import { motion } from 'motion/react';
import type { FC } from 'react';

/**
 * Circle loader with animation.
 *
 * @constructor
 */
export const Circle: FC<LucideProps & SVGMotionProps<any>> = ({
  className,
  ...props
}) => {
  return (
    <motion.div
      aria-hidden
      animate={{
        rotate: '1turn',
      }}
      transition={{
        ease: 'linear',
        duration: 2,
        delay: 0,
        repeat: Infinity,
      }}
    >
      <Loader
        aria-hidden={false}
        className={cn(className)}
        {...props}
      />
    </motion.div>
  );
};
