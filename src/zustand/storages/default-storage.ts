import { StateStorage } from 'zustand/middleware';

/**
 * Default storage for data persisting.
 *
 * It uses **local storage** and does not proceed *Client text do not match server* error.
 */
const defaultStorage: StateStorage = {
  setItem: (...args) => window.localStorage.setItem(...args),
  removeItem: (...args) => window.localStorage.removeItem(...args),
  getItem: async (...args) =>
    new Promise(resolve => {
      if (typeof window === 'undefined') {
        resolve(null);
      } else {
        setTimeout(() => {
          resolve(window.localStorage.getItem(...args));
        }, 0);
      }
    }),
};

export default defaultStorage;
