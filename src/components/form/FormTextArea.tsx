import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { useFormContext } from 'react-hook-form';

const formTextAreaVariants = cva(
  'resize-none block w-full rounded-md border px-4 py-2 text-base focus:outline-none transition ease-in-out duration-300',
  {
    variants: {
      size: {
        small: 'text-sm h-20',
        medium: 'text-base h-28',
        large: 'text-lg h-36',
        extraLarge: 'text-xl h-48',
      },
      variant: {
        default: 'border-gray-300 focus:ring-2 focus:ring-blue-500',
        outlined: 'border-2 border-gray-500 hover:border-blue-500 focus:ring-2 focus:ring-blue-500',
        error: 'border-red-500 focus:ring-2 focus:ring-red-500',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'default',
    },
  },
);

interface FormTextAreaProps extends VariantProps<typeof formTextAreaVariants> {
  className?: string;
  id: string;
  formField: string;
}

const FormTextArea = ({ className, id, formField, size, variant }: FormTextAreaProps) => {
  const { register } = useFormContext();

  return (
    <textarea
      className={cn(formTextAreaVariants({ size, variant, className }))}
      id={id}
      {...register(formField)}
    />
  );
};

export default FormTextArea;
