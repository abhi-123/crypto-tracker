import { create } from 'zustand';

export const useCryptoStore = create((set) => ({
  price: null,
  setPrice: (price) => set({ price })
}));
