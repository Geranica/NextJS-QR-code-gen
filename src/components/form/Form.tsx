import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
