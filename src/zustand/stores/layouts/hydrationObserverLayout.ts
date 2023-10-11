import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import defaultStorage from '@/src/zustand/storages/default-storage';
import { HydrationObserver } from '@/src/zustand/types/hydration-observer';

/**
 * Zustand store example with hydration tracking.
 */
const useHyperStore = create<HydrationObserver<{}>>()(
  persist(
    (set, get) => ({
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

export default useHyperStore;
