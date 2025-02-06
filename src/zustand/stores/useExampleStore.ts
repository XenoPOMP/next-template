import { create } from 'zustand';

export interface IExampleStore {
  text: string;
  setText: (t: string) => void;
}

export const useExampleStore = create<IExampleStore>(set => ({
  text: '',
  setText: (newText: string) =>
    set({
      text: newText,
    }),
}));
