import { ReactNode } from 'react';

interface LayoutMainProps {
  children: ReactNode;
  className?: string;
}

const LayoutMain = ({ children, className }: LayoutMainProps) => (
  <main className={className}>{children}</main>
);

export default LayoutMain;
