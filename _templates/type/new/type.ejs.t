---
to: src/types/<%= h.changeCase.paramCase(name) %>.ts
---
import type { TODO } from '@/src/types';

export type <%= h.changeCase.pascalCase(name) %> = TODO;
