---
to: src/zustand/stores/index.ts
inject: true
append: true
skip_if: use<%= h.changeCase.pascalCase(name) %>
eof_last: false
---
export * from './use<%= h.changeCase.pascalCase(name) %>';
