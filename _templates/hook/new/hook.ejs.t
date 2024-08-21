---
to: src/hooks/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.camelCase(name) %>.ts
eol_last: true
---
export const <%= h.changeCase.camelCase(name) %> = () => {
    return {};
};
