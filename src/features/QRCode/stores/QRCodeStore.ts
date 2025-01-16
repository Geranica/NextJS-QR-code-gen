import { createStore } from 'zustand/vanilla';
import { RefObject } from 'react';

interface QRCodeState {
  value: string;
  logo: string;
  qrCodeRef: RefObject<SVGSVGElement | null>;
}

interface QRCodeActions {
  setValue: (value: string) => void;
  setLogo: (logoStr: string) => void;
  setQRCodeRef: (ref: RefObject<SVGSVGElement | null>) => void;
}

export type QRCodeStore = QRCodeState & QRCodeActions;

export const defaultInitState: QRCodeState = {
  value: '',
  logo: '',
  qrCodeRef: { current: null },
};

export const createQRCodeStore = (initState: QRCodeState = defaultInitState) => {
  return createStore<QRCodeStore>()((set) => ({
    ...initState,
    setValue: (value: string) => {
      set({
        value,
      });
    },
    setLogo: (logoStr: string) => {
      set({
        logo: logoStr,
      });
    },
    setQRCodeRef: (ref) => set({ qrCodeRef: ref }),
  }));
};
