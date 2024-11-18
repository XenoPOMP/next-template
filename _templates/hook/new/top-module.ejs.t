---
to: src/hooks/index.ts
inject: true
append: true
skip_if: <%= h.changeCase.paramCase(name) %>
eof_last: false
---
export * from './<%= h.changeCase.paramCase(name) %>';
