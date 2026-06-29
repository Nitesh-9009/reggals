'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { CartItem } from '@/lib/types';

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  add: (item: CartItem) => void;
  remove: (productId: string, variantLabel?: string) => void;
  setQty: (productId: string, qty: number, variantLabel?: string) => void;
  toggleGiftWrap: (productId: string, on: boolean) => void;
  setGiftMessage: (productId: string, msg: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  subtotal: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      add: (item) => {
        const existing = get().items.find(
          (i) => i.productId === item.productId && i.variantLabel === item.variantLabel
        );
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.productId === item.productId && i.variantLabel === item.variantLabel
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
            isOpen: true
          });
        } else {
          set({ items: [...get().items, item], isOpen: true });
        }
      },
      remove: (productId, variantLabel) =>
        set({
          items: get().items.filter(
            (i) => !(i.productId === productId && i.variantLabel === variantLabel)
          )
        }),
      setQty: (productId, qty, variantLabel) =>
        set({
          items: get()
            .items.map((i) =>
              i.productId === productId && i.variantLabel === variantLabel
                ? { ...i, quantity: Math.max(1, qty) }
                : i
            )
            .filter((i) => i.quantity > 0)
        }),
      toggleGiftWrap: (productId, on) =>
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, giftWrap: on } : i
          )
        }),
      setGiftMessage: (productId, msg) =>
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, giftMessage: msg } : i
          )
        }),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set({ isOpen: !get().isOpen }),
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((n, i) => n + i.quantity, 0)
    }),
    {
      name: 'reggals.cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ items: s.items })
    }
  )
);
