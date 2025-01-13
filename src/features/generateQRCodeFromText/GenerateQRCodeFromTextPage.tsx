import LayoutMain from '@/components/LayoutMain';
import LayoutContainer from '@/components/LayoutContainer';

import ContentWrapper from '@/components/ContentWrapper';
import GenerateQRCodeFromTextForm from './components/GenerateQRCodeFromTextForm';
import QRCodeFromText from './components/QRCodeFromText';

const GenerateQRCodeFromTextPage = () => {
  return (
    <LayoutMain>
      <LayoutContainer>
        <ContentWrapper className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <GenerateQRCodeFromTextForm />
          <QRCodeFromText />
        </ContentWrapper>
      </LayoutContainer>
    </LayoutMain>
  );
};

export default GenerateQRCodeFromTextPage;
