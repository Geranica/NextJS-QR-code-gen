import { UrlSvg } from '@/svg';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const urlIconVariants = cva('', {
  variants: {
    size: {
      small: 'w-4 h-4',
      medium: 'w-6 h-6',
      large: 'w-8 h-8',
      extraLarge: 'w-10 h-10',
    },
    variant: {
      primary: 'fill-blue-500',
      secondary: 'fill-gray-500',
      danger: 'fill-red-500',
      outline: 'fill-blue-500 border border-blue-500',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

interface UrlIconProps extends VariantProps<typeof urlIconVariants> {
  className?: string;
}

const UrlIcon = ({ variant, size, className }: UrlIconProps) => {
  return <UrlSvg className={cn(urlIconVariants({ variant, size, className }))} />;
};

export default UrlIcon;
