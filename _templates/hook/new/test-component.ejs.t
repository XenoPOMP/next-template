---
to: __tests__/assets/test-components/<%= h.changeCase.pascalCase(name) %>Test.tsx
eol_last: true
---
import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps, ComponentRef } from 'react';
import { useRef, useState } from 'react';

import { <%= h.changeCase.camelCase(name) %> } from '@/hooks';

interface TestProps {}

// eslint-disable-next-line jsdoc/require-jsdoc
function <%= h.changeCase.pascalCase(name) %>Test(props: Partial<TestProps>) {
  // <%= h.changeCase.camelCase(name) %>();

  const [state, updateState] = useState(12);
  const inputRef = useRef<ComponentRef<'input'>>(null);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleClick: ComponentProps<'input'>['onClick'] = () => {
    updateState(Number(inputRef.current?.getAttribute('data-input-string')));
  };

  return (
    <>
      <input
        data-testid='input'
        data-input-string=''
        ref={inputRef}
        onClick={handleClick}
      />

      <div
        data-testid='output'
        data-output={state}
      >
        <></>
      </div>
    </>
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function create<%= h.changeCase.pascalCase(name) %>Test(props?: TestProps) {
  const res = render(<<%= h.changeCase.pascalCase(name) %>Test {...props} />);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const getCurrentState = () => {
    const output = screen.getByTestId('output');
    return output.getAttribute('data-output');
  };

  // eslint-disable-next-line jsdoc/require-jsdoc
  const updateState = (newValue: number) => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    input.setAttribute('data-input-string', newValue.toString());
    fireEvent.click(input);
  };

  return {
    renderResult: res,
    getCurrentState,
    updateState,
  };
}