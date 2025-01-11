'use client';

import QRCodeGenerator from '@/features/QRCode/QRCodeGenerator';

import { useQRCodeStore } from '@/features/QRCode/useQRCodeStore';

import ContentWrapper from '@/components/ContentWrapper';

const GeneratorQRCodeFromText = () => {
  const textValue = useQRCodeStore((store) => store.text);

  return (
    <ContentWrapper className="p-6 bg-gray-100">
      <QRCodeGenerator value={textValue} />
    </ContentWrapper>
  );
};

export default GeneratorQRCodeFromText;
