import LayoutContainer from '@/components/LayoutContainer';
import LayoutSection from '@/components/LayoutSection';

import ContentWrapper from '@/components/ContentWrapper';
import DownloadQRCodeModal from '../downloadQRCode/DownloadQRCodeModal';
import QRCodeFromUrl from './components/QRCodeFromUrl';

import GenerateQRCodeFromUrlForm from './components/GenerateQRCodeFromUrlForm';

const GenerateQRCodeForUrlPage = () => {
  return (
    <LayoutContainer>
      <ContentWrapper className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <LayoutSection>
          <GenerateQRCodeFromUrlForm />
        </LayoutSection>

        <LayoutSection className="flex flex-col gap-3">
          <QRCodeFromUrl />
          <DownloadQRCodeModal />
        </LayoutSection>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default GenerateQRCodeForUrlPage;
