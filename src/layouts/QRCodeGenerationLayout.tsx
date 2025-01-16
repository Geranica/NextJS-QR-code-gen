import { ReactNode } from 'react';

import LayoutMain from '@/components/LayoutMain';
import QRCodeGenerationOptionsPanel from '@/common/QRCodeGenerationOptionsPanel/QRCodeGenerationOptionsPanel';
import ContentWrapper from '@/components/ContentWrapper';

interface QRCodeGenerationLayoutProps {
  children: ReactNode;
}

const QRCodeGenerationLayout = ({ children }: QRCodeGenerationLayoutProps) => {
  return (
    <LayoutMain>
      <ContentWrapper className="flex flex-col gap-7 p-4">
        <QRCodeGenerationOptionsPanel />
        {children}
      </ContentWrapper>
    </LayoutMain>
  );
};

export default QRCodeGenerationLayout;
