import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

/**
 * Body element for Accordion.
 * @param className
 * @param children
 * @param props
 * @constructor
 */
export const AccordionBody: VariableFC<'div'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <>
      <div
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
