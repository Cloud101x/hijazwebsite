import { create } from 'zustand';
import type { Product } from '../data/products';

export interface CartLine {
  product: Product;
  qty: number;
}

interface CartState {
  open: boolean;
  lines: CartLine[];
  add: (product: Product) => void;
  remove: (id: string) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
  subtotal: () => number;
  count: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  open: false,
  lines: [],
  add: (product) =>
    set((s) => {
      const existing = s.lines.find((l) => l.product.id === product.id);
      if (existing) {
        return {
          lines: s.lines.map((l) => (l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l)),
          open: true,
        };
      }
      return { lines: [...s.lines, { product, qty: 1 }], open: true };
    }),
  remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.product.id !== id) })),
  inc: (id) => set((s) => ({ lines: s.lines.map((l) => (l.product.id === id ? { ...l, qty: l.qty + 1 } : l)) })),
  dec: (id) =>
    set((s) => ({
      lines: s.lines
        .map((l) => (l.product.id === id ? { ...l, qty: Math.max(0, l.qty - 1) } : l))
        .filter((l) => l.qty > 0),
    })),
  openCart: () => set({ open: true }),
  closeCart: () => set({ open: false }),
  subtotal: () => get().lines.reduce((sum, l) => sum + l.product.price * l.qty, 0),
  count: () => get().lines.reduce((sum, l) => sum + l.qty, 0),
}));
