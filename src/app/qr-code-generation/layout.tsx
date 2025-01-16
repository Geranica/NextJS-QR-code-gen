import { ReactNode } from 'react';

import QRCodeGenerationLayout from '@/layouts/QRCodeGenerationLayout';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <QRCodeGenerationLayout>{children}</QRCodeGenerationLayout>;
};

export default Layout;
