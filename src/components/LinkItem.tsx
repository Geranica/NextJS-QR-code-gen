import Link from 'next/link';
import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const linkItemVariants = cva(
  'px-4 block py-2 rounded focus:outline-none transition ease-in-out duration-300',
  {
    variants: {
      variant: {
        primary: 'text-black-500',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
        linkButton: 'text-blue-500 underline hover:text-blue-700',
        active: 'border-b-4 border-blue-700 rounded-none pb-3 h-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface LinkItemProps extends VariantProps<typeof linkItemVariants> {
  content: ReactNode;
  className?: string;
  href: string;
}

const LinkItem = ({ href, content, variant, className }: LinkItemProps) => (
  <Link
    className={cn(linkItemVariants({ variant, className }))}
    href={href}
  >
    {content}
  </Link>
);

export default LinkItem;
