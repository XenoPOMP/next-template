import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import defaultStorage from '@/src/zustand/storages/default-storage';
import { HydrationObserver } from '@/src/zustand/types/hydration-observer';

const useAppStore = create<
  HydrationObserver<{
    mode: 'light' | 'dark';
    toggleTheme: () => void;
  }>
>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      mode: 'light',
      toggleTheme: () =>
        set(state => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
      _hasHydrated: false,
      setHasHydrated: state => {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: 'main-storage',
      storage: createJSONStorage(() => defaultStorage),
      onRehydrateStorage: () => state => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export default useAppStore;
