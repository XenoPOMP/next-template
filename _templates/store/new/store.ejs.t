---
to: src/zustand/stores/use<%= h.changeCase.pascalCase(name) %>.ts
---
import { create } from 'zustand';

export interface I<%= h.changeCase.pascalCase(name) %> {}

export const use<%= h.changeCase.pascalCase(name) %> = create<I<%= h.changeCase.pascalCase(name) %>>(() => ({}));
