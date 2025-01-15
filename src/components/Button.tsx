import { ReactNode, MouseEventHandler } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'px-4 py-2 rounded focus:outline-none transition ease-in-out duration-300',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        extraLarge: 'text-xl',
      },
      variant: {
        primary:
          'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-200 disabled:text-gray-500',
        secondary:
          'bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300 disabled:text-gray-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-red-200 disabled:text-gray-500',
        outline:
          'border border-blue-500 text-blue-500 hover:bg-blue-100 disabled:bg-gray-200 disabled:text-gray-500',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'primary',
    },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  content: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const Button = ({
  content,
  onClick,
  disabled,
  type = 'button',
  variant,
  size,
  className,
}: ButtonProps) => {
  if (type === 'button') {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {content}
      </button>
    );
  }

  if (type === 'submit') {
    return (
      <button
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {content}
      </button>
    );
  }

  return null;
};

export default Button;
