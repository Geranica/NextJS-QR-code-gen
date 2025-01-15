import { useEffect, useRef } from 'react';
import { useQRCodeStore } from '../useQRCodeStore';

export const useQRCodeGenerator = () => {
  const qrCodeRef = useRef<SVGSVGElement | null>(null);
  const setQRCodeRef = useQRCodeStore((state) => state.setQRCodeRef);

  useEffect(() => {
    setQRCodeRef(qrCodeRef);
  }, [setQRCodeRef]);

  return { qrCodeRef };
};
