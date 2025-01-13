import { createStore } from 'zustand/vanilla';

interface QRCodeState {
  text: string;
  logo: string;
}

interface QRCodeActions {
  setText: (text: string) => void;
  setLogo: (logoStr: string) => void;
}

export type QRCodeStore = QRCodeState & QRCodeActions;

export const defaultInitState: QRCodeState = {
  text: '',
  logo: '',
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
  }));
};
