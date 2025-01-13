import { ReactNode } from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const textVariants = cva('font-inter', {
  variants: {
    size: {
      small: 'text-responsive-10-12 leading-5',
      regular: 'text-responsive-12-14 leading-6',
      medium: 'text-responsive-14-18',
      large: 'text-responsive-18-20 leading-7',
      extraLarge: 'text-responsive-20-24 leading-8',
      huge: 'text-responsive-24-28 leading-9',
      enormous: 'text-responsive-28-32 leading-10',
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
