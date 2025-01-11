import { ReactNode } from 'react';

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContentWrapper = ({ children, className }: ContentWrapperProps) => (
  <div className={className}>{children}</div>
);

export default ContentWrapper;
