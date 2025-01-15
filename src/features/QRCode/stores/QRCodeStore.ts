import { createStore } from 'zustand/vanilla';
import { RefObject } from 'react';

interface QRCodeState {
  text: string;
  logo: string;
  qrCodeRef: RefObject<SVGSVGElement | null>;
}

interface QRCodeActions {
  setText: (text: string) => void;
  setLogo: (logoStr: string) => void;
  setQRCodeRef: (ref: RefObject<SVGSVGElement | null>) => void;
}

export type QRCodeStore = QRCodeState & QRCodeActions;

export const defaultInitState: QRCodeState = {
  text: '',
  logo: '',
  qrCodeRef: { current: null },
};

export const createQRCodeStore = (initState: QRCodeState = defaultInitState) => {
  return createStore<QRCodeStore>()((set) => ({
    ...initState,
    setText: (text: string) => {
      set({
        text,
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
