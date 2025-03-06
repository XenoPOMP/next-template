import cn from 'classnames';
import { type VariableFC, jsxDotNotation } from 'xenopomp-essentials';

import { AccordionBody, AccordionCollapse } from './components';

/**
 * Base element for Accordion.
 * @param className
 * @param children
 * @param props
 * @constructor
 */
const InternalAccordion: VariableFC<'details', unknown> = ({
  className,
  children,
  ...props
}) => {
  return (
    <details
      className={cn('group', className)}
      {...props}
    >
      {children}
    </details>
  );
};

/**
 * Component with collapsable content.
 *
 * @example
 * <>
 *  <Accordion className={cn('max-w-[500px]')}>
 *    <Accordion.Collapse>Collapse</Accordion.Collapse>
 *    <Accordion.Body>Body of collapsable accordion</Accordion.Body>
 *  </Accordion>
 * </>
 */
export const Accordion = jsxDotNotation(InternalAccordion, {
  Collapse: AccordionCollapse,
  Body: AccordionBody,
});
