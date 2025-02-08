import { createContext, useContext } from 'react';
import type { SetState } from 'xenopomp-essentials';

interface IAccordionContext {
  collapsed: boolean;
  setCollapsed: SetState<boolean>;
}

export const AccordionContext = createContext<IAccordionContext>(
  {} as IAccordionContext,
);

export const useAccordion = () => {
  const ctx = useContext(AccordionContext);
  return {
    ...ctx,
  };
};
