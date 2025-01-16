'use client';

import QRCodeGenerator from '@/features/QRCode/QRCodeGenerator';

import { useQRCodeStore } from '@/features/QRCode/useQRCodeStore';

import ContentWrapper from '@/components/ContentWrapper';

const QRCodeFromUrl = () => {
  const value = useQRCodeStore((store) => store.value);
  const logo = useQRCodeStore((store) => store.logo);

  return (
    <ContentWrapper className="p-6 bg-gray-100">
      <QRCodeGenerator
        logoSrc={logo}
        value={value}
        logoExcavate
      />
    </ContentWrapper>
  );
};

export default QRCodeFromUrl;
