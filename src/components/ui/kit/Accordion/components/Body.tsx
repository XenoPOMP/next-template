import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

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
