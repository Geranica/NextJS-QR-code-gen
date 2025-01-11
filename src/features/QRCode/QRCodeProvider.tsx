'use client';

import { type ReactNode, createContext, useRef } from 'react';

import { defaultInitState, createQRCodeStore } from './stores/QRCodeStore';

export type QRCodeStoreApi = ReturnType<typeof createQRCodeStore>;

export const QRCodeStoreContext = createContext<QRCodeStoreApi | undefined>(undefined);

export interface QRCodeProviderProps {
  children: ReactNode;
}

export const QRCodeStoreProvider = ({ children }: QRCodeProviderProps) => {
  const storeRef = useRef<QRCodeStoreApi | undefined>(undefined);

  if (!storeRef.current) {
    storeRef.current = createQRCodeStore({
      ...defaultInitState,
    });
  }

  return (
    <QRCodeStoreContext.Provider value={storeRef.current}>{children}</QRCodeStoreContext.Provider>
  );
};
