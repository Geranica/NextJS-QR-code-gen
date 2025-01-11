import { QRCodeSVG } from 'qrcode.react';

import ContentWrapper from '@/components/ContentWrapper';

interface QRCodeGeneratorProps {
  value: string;
}
const QRCodeGenerator = ({ value }: QRCodeGeneratorProps) => {
  return (
    <ContentWrapper className="aspect-square max-h-60">
      <QRCodeSVG
        value={value}
        className="w-full h-full"
      />
    </ContentWrapper>
  );
};

export default QRCodeGenerator;
