import ContentWrapper from '@/components/ContentWrapper';

import GenerateLogoForQRCodeButton from './components/GenerateLogoForQRCodeButton';
import ImageMetadata from './components/ImageMetadata';

interface GenerateLogoForQRCodeProps {
  id: string;
  formField: string;
}

const GenerateLogoForQRCode = ({ id, formField }: GenerateLogoForQRCodeProps) => {
  return (
    <ContentWrapper className="flex flex-col gap-4">
      <GenerateLogoForQRCodeButton
        id={id}
        formField={formField}
      />
      <ImageMetadata formField={formField} />
    </ContentWrapper>
  );
};

export default GenerateLogoForQRCode;
