import { useQRCodeStore } from '@/features/QRCode/useQRCodeStore';

import { transformSvgToUrl } from '@/utils/convert/transformSvgToUrl';
import { downloadSvg } from '../helpers/downloadSvg';

export const useDownloadQRCode = () => {
  const qrCodeRef = useQRCodeStore((store) => store.qrCodeRef);
  const isQRCodeValue = Boolean(useQRCodeStore((store) => store.text));

  const handleDownloadQRCode = () => {
    if (!qrCodeRef || !qrCodeRef.current === null) return;

    const qrCodeUrl = transformSvgToUrl(qrCodeRef);

    if (!qrCodeUrl) return;

    downloadSvg(qrCodeUrl);
  };

  return { handleDownloadQRCode, isQRCodeValue };
};
