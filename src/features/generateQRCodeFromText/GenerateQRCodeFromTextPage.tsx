import LayoutMain from '@/components/LayoutMain';
import LayoutContainer from '@/components/LayoutContainer';

import ContentWrapper from '@/components/ContentWrapper';
import GenerateQRCodeFromTextForm from './components/GenerateQRCodeFromTextForm';
import GeneratorQRCodeFromText from './components/GeneratorQRCodeFromText';

const GenerateQRCodeFromTextPage = () => {
  return (
    <LayoutMain>
      <LayoutContainer>
        <ContentWrapper className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <GenerateQRCodeFromTextForm />
          <GeneratorQRCodeFromText />
        </ContentWrapper>
      </LayoutContainer>
    </LayoutMain>
  );
};

export default GenerateQRCodeFromTextPage;
