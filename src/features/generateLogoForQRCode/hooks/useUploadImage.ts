'use client';

import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface useUploadImageParams {
  formField: string;
}

export const useUploadImage = ({ formField }: useUploadImageParams) => {
  const { register } = useFormContext();

  const registerProps = register(formField);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  return { handleUploadClick, fileInputRef, registerProps };
};
