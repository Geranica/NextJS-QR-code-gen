import QRCodeGenerationOptionsPanel from '@/common/QRCodeGenerationOptionsPanel/QRCodeGenerationOptionsPanel';
import GenerateQRCodeFromTextPage from '@/features/generateQRCodeFromText/GenerateQRCodeFromTextPage';

import ContentWrapper from '@/components/ContentWrapper';

export default function Home() {
  return (
    <ContentWrapper className="flex flex-col gap-7 p-4">
      <QRCodeGenerationOptionsPanel />
      <GenerateQRCodeFromTextPage />
    </ContentWrapper>
  );
}
