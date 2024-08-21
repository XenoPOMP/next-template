---
to: src/hooks/<%= h.changeCase.paramCase(name) %>/index.ts
eol_last: true
---
export * from './<%= h.changeCase.camelCase(name) %>';
