'use client';

import Button from '@/components/Button';

import { dictionary } from '@/shared/ditctionary';
import { useDownloadQRCode } from './hooks/useDownloadQRCode';

const DownloadQRCodeAsSvgButton = () => {
  const { handleDownloadQRCode, isQRCodeValue } = useDownloadQRCode();

  return (
    <Button
      onClick={handleDownloadQRCode}
      content={dictionary.downloadAsSvg}
      disabled={!isQRCodeValue}
    />
  );
};

export default DownloadQRCodeAsSvgButton;
