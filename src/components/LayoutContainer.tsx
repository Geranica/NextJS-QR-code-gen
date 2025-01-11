import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const layoutContainerVariants = cva('container mx-auto px-4');

interface LayoutContainerProps extends VariantProps<typeof layoutContainerVariants> {
  children: ReactNode;
  className?: string;
}

const LayoutContainer = ({ children, className }: LayoutContainerProps) => {
  return <div className={cn(layoutContainerVariants({ className }))}>{children}</div>;
};

export default LayoutContainer;
