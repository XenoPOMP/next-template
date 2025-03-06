import { create } from 'zustand';

export interface IExampleStore {
  text: string;
  /** Example store method. */
  setText: (t: string) => void;
}

export const useExampleStore = create<IExampleStore>(set => ({
  text: '',
  // eslint-disable-next-line jsdoc/require-jsdoc
  setText: (newText: string) =>
    set({
      text: newText,
    }),
}));
