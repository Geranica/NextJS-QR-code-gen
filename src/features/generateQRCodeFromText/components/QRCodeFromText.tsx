'use client';

import QRCodeGenerator from '@/features/QRCode/QRCodeGenerator';

import { useQRCodeStore } from '@/features/QRCode/useQRCodeStore';

import ContentWrapper from '@/components/ContentWrapper';

const QRCodeFromText = () => {
  const textValue = useQRCodeStore((store) => store.text);
  const logo = useQRCodeStore((store) => store.logo);

  return (
    <ContentWrapper className="p-6 bg-gray-100">
      <QRCodeGenerator
        logoSrc={logo}
        value={textValue}
        logoHeight={40}
        logoWidth={40}
        logoExcavate
      />
    </ContentWrapper>
  );
};

export default QRCodeFromText;
