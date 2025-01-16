import { ReactNode } from 'react';

interface LayoutSectionProps {
  children: ReactNode;
  className?: string;
}

const LayoutSection = ({ children, className }: LayoutSectionProps) => (
  <section className={className}>{children}</section>
);

export default LayoutSection;
