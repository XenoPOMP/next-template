import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createStorageKey } from '@/src/utils/misc';

interface SettingsStore {}

const useSettingsStore = create<SettingsStore>()(
  persist(() => ({}), {
    name: createStorageKey('persist', 'settings'),
  }),
);

export default useSettingsStore;
