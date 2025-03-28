---
to: __tests__/assets/test-components/index.ts
eol_last: true
inject: true
append: true
skip_if: <%= h.changeCase.pascalCase(name) %>
---
export * from './<%= h.changeCase.pascalCase(name) %>Test';
