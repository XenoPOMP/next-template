---
to: __tests__/assets/test-components/<%= h.changeCase.pascalCase(name) %>Test.tsx
eol_last: true
---
import { <%= h.changeCase.camelCase(name) %> } from '@/hooks';

interface TestProps {}

// eslint-disable-next-line jsdoc/require-jsdoc
function <%= h.changeCase.pascalCase(name) %>Test({}: TestProps) {
  return <></>;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function create<%= h.changeCase.pascalCase(name) %>Test(props?: TestProps) {
  const res = render(<<%= h.changeCase.pascalCase(name) %>Test {...props} />);

  return {
    renderResult: res,
  };
}