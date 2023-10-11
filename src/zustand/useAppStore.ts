import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import defaultStorage from '@/src/zustand/default-storage';

const useAppStore = create<{
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}>()(
  persist(
    (set, get) => ({
      mode: 'light',
      toggleTheme: () =>
        set(state => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'main-storage',
      storage: createJSONStorage(() => defaultStorage),
    }
  )
);

export default useAppStore;
