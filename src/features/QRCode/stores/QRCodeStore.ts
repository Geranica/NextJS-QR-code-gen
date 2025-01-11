import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

interface QRCodeState {
  text: string;
  hydrated: boolean;
}

interface QRCodeActions {
  setText: (text: string) => void;
  setHydrated: () => void;
}

export type QRCodeStore = QRCodeState & QRCodeActions;

export const defaultInitState: QRCodeState = {
  text: '',
  hydrated: false,
};

export const createQRCodeStore = (initState: QRCodeState = defaultInitState) => {
  return createStore<QRCodeStore>()(
    persist(
      (set) => ({
        ...initState,
        setText: (text: string) => {
          set({
            text,
          });
        },
        setHydrated: () => {
          set({
            hydrated: true,
          });
        },
      }),
      {
        name: 'generate-qr-code-from-text-store ',
        onRehydrateStorage: () => {
          return (state, error) => {
            if (!error) state?.setHydrated();
          };
        },
      },
    ),
  );
};
