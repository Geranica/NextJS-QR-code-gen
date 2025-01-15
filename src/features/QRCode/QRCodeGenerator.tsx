'use client';

import { QRCodeSVG } from 'qrcode.react';

import ContentWrapper from '@/components/ContentWrapper';

import { useQRCodeGenerator } from './hooks/useQRCodeGenerator';

interface QRCodeGeneratorProps {
  value: string;
  logoSrc: string;
  logoHeight: number;
  logoWidth: number;
  logoExcavate: boolean;
}

const QRCodeGenerator = ({
  value,
  logoSrc,
  logoHeight,
  logoWidth,
  logoExcavate,
}: QRCodeGeneratorProps) => {
  const { qrCodeRef } = useQRCodeGenerator();

  const imageSettings = logoSrc
    ? {
        src: logoSrc,
        height: logoHeight,
        width: logoWidth,
        excavate: logoExcavate,
      }
    : undefined;

  return (
    <ContentWrapper className="aspect-square max-h-60">
      <QRCodeSVG
        value={value}
        className="w-full h-full"
        imageSettings={imageSettings}
        ref={qrCodeRef}
      />
    </ContentWrapper>
  );
};

export default QRCodeGenerator;
