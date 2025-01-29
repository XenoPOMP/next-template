import { createStorageKey } from '@/utils/misc';
import { createBoundStore } from '@/zustand';

interface SettingsStore {
  lang: 'ru' | 'en';
  changeLang: (newLang: SettingsStore['lang']) => void;
}

const useSettingsStore = createBoundStore<SettingsStore>(
  set => ({
    lang: 'en',
    changeLang: newLang => set({ lang: newLang }),
  }),
  {
    name: createStorageKey('persist', 'settings'),
  },
);

export default useSettingsStore;
