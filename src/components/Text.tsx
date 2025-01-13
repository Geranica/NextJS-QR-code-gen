import { ReactNode } from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const textVariants = cva('font-inter', {
  variants: {
    size: {
      small: 'text-responsive-10-12',
      regular: 'text-responsive-12-14',
      medium: 'text-responsive-14-18',
      large: 'text-responsive-18-20',
      extraLarge: 'text-responsive-20-24',
      huge: 'text-responsive-24-28',
      enormous: 'text-responsive-28-32',
    },
    variant: {
      primary: 'text-gray-900 font-medium',
      secondary: 'text-gray-600 font-light',
      danger: 'text-red-600 font-bold',
      muted: 'text-gray-400',
      highlight: 'text-yellow-500 font-semibold',
    },
  },
  defaultVariants: {
    size: 'regular',
    variant: 'primary',
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  content: ReactNode;
  className?: string;
  element?: 'p' | 'div' | 'span';
}

const Text = ({ content, element: Element = 'p', variant, className, size }: TextProps) => {
  return <Element className={cn(textVariants({ variant, className, size }))}>{content}</Element>;
};

export default Text;
