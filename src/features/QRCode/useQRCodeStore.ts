import { useContext } from 'react';
import { useStore } from 'zustand';

import { type QRCodeStore } from './stores/QRCodeStore';
import { QRCodeStoreContext } from './QRCodeProvider';

export const useQRCodeStore = <T>(selector: (store: QRCodeStore) => T): T => {
  const context = useContext(QRCodeStoreContext);

  if (!context) {
    throw new Error(`useQRCodeStore must be used within a QRCodeProvider`);
  }

  return useStore(context, selector);
};
