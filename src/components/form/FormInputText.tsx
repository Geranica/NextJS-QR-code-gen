import { UseFormRegister, FieldValues } from 'react-hook-form';

interface FormInputTextProps {
  className: string;
  id: string;
  formField: string;
  register: UseFormRegister<FieldValues>;
}

const FormInputText = ({ className, id, formField, register }: FormInputTextProps) => {
  return (
    <input
      type="text"
      className={className}
      id={id}
      {...register(formField)}
    />
  );
};

export default FormInputText;
