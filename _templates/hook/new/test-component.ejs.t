---
to: __tests__/assets/test-components/<%= h.changeCase.pascalCase(name) %>Test.tsx
eol_last: true
---
import { createTestingComponent } from '@test/assets';

export const create<%= h.changeCase.pascalCase(name) %>Test = createTestingComponent();