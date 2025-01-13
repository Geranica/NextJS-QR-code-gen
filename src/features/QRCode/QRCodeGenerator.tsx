import { QRCodeSVG } from 'qrcode.react';

import ContentWrapper from '@/components/ContentWrapper';

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
  return (
    <ContentWrapper className="aspect-square max-h-60">
      <QRCodeSVG
        value={value}
        className="w-full h-full"
        imageSettings={
          logoSrc
            ? {
                src: logoSrc,
                height: logoHeight,
                width: logoWidth,
                excavate: logoExcavate,
              }
            : undefined
        }
      />
    </ContentWrapper>
  );
};

export default QRCodeGenerator;
