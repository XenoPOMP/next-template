import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import defaultStorage from '@/src/zustand/storages/default-storage';

/**
 * The most common Zustand store example.
 *
 * _No hydration tracking._
 */
const useSuperStore = create<{}>()(
  persist((set, get) => ({}), {
    name: 'your-storage-name',
    storage: createJSONStorage(() => defaultStorage),
  })
);
