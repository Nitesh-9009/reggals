'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type WishlistState = {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  clear: () => void;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) =>
        set({
          ids: get().ids.includes(id)
            ? get().ids.filter((i) => i !== id)
            : [...get().ids, id]
        }),
      has: (id) => get().ids.includes(id),
      clear: () => set({ ids: [] })
    }),
    {
      name: 'reggals.wishlist',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
