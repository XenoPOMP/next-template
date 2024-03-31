import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createStorageKey } from '@/src/utils/misc';

interface SettingsStore {
  lang: 'ru' | 'en';
  changeLang: (newLang: SettingsStore['lang']) => void;
}

const useSettingsStore = create<SettingsStore>()(
  persist(
    set => ({
      lang: 'en',
      changeLang: newLang => set({ lang: newLang }),
    }),
    {
      name: createStorageKey('persist', 'settings'),
    },
  ),
);

export default useSettingsStore;
