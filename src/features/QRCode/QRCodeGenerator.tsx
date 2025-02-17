'use client';

import { QRCodeSVG } from 'qrcode.react';

import ContentWrapper from '@/components/ContentWrapper';

import { useQRCodeGenerator } from './hooks/useQRCodeGenerator';

interface QRCodeGeneratorProps {
  value: string;
  logoSrc: string;
  logoExcavate: boolean;
}

const QRCodeGenerator = ({ value, logoSrc, logoExcavate }: QRCodeGeneratorProps) => {
  const { qrCodeRef } = useQRCodeGenerator();

  const imageSettings = logoSrc
    ? {
        src: logoSrc,
        height: 30,
        width: 30,
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
        level="Q"
      />
    </ContentWrapper>
  );
};

export default QRCodeGenerator;
