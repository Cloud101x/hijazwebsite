import { create } from 'zustand';

export interface ReservationState {
  name: string;
  party: number;
  date: string;
  time: string;
  table: 'bakery-window' | 'arcade-mezz' | 'dj-floor' | 'private-booth';
  open: boolean;
  set: <K extends keyof Omit<ReservationState, 'set' | 'reset' | 'openDrawer' | 'closeDrawer'>>(
    key: K,
    value: ReservationState[K],
  ) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  reset: () => void;
}

const initial = {
  name: '',
  party: 2,
  date: 'Sat · Jul 13',
  time: '20:00',
  table: 'arcade-mezz' as const,
  open: false,
};

export const useReservation = create<ReservationState>((set) => ({
  ...initial,
  set: (key, value) => set({ [key]: value } as any),
  openDrawer: () => set({ open: true }),
  closeDrawer: () => set({ open: false }),
  reset: () => set({ ...initial }),
}));
