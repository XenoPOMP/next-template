import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import defaultStorage from '@/src/zustand/storages/default-storage';

const useSuperStore = create<{}>()(
  persist((set, get) => ({}), {
    name: 'your-storage-name',
    storage: createJSONStorage(() => defaultStorage),
  })
);
