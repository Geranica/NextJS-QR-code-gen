import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { useFormContext, Controller } from 'react-hook-form';

import Text from '../Text';
import ContentWrapper from '../ContentWrapper';

const formInputTextVariants = cva(
  'resize-none block w-full rounded-md border px-4 py-2 text-base focus:outline-none transition ease-in-out duration-300',
  {
    variants: {
      size: {
        small: 'text-sm h-5',
        medium: 'text-base h-10',
        large: 'text-lg h-15',
        extraLarge: 'text-xl h-20',
      },
      variant: {
        default: 'border-gray-300 focus:ring-2 focus:ring-blue-500',
        outlined: 'border-2 border-gray-500 hover:border-blue-500 focus:ring-2 focus:ring-blue-500',
        error: 'border-red-500 focus:ring-1 focus:ring-red-500',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'default',
    },
  },
);

interface FormInputTextProps extends VariantProps<typeof formInputTextVariants> {
  className?: string;
  id: string;
  formField: string;
  placeholder?: string;
}

const FormInputText = ({
  className,
  id,
  formField,
  size,
  variant,
  placeholder,
}: FormInputTextProps) => {
  const { control } = useFormContext();

  return (
    <ContentWrapper className="flex flex-col gap-1">
      <Controller
        control={control}
        name={formField}
        render={({ field, fieldState }) => {
          const { error } = fieldState;

          const isError = Boolean(error?.message);
          const helperText = String(error?.message);

          return (
            <>
              <input
                placeholder={placeholder}
                type="text"
                className={cn(
                  formInputTextVariants({
                    size,
                    variant: isError ? 'error' : variant,
                    className,
                  }),
                )}
                id={id}
                {...field}
              />
              <Text
                variant="error"
                content={isError ? helperText : '\u00A0'}
              />
            </>
          );
        }}
      />
    </ContentWrapper>
  );
};

export default FormInputText;
