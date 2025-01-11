'use client';

import { useForm } from 'react-hook-form';

import { useQRCodeStore } from '@/features/QRCode/useQRCodeStore';
import { FORM_INITIAL_VALUES } from '../constants';

import { FormInput } from '../types';

export const useGenerateQRCodeFromTextForm = () => {
  const methods = useForm<FormInput>({ defaultValues: FORM_INITIAL_VALUES });
  const setText = useQRCodeStore((store) => store.setText);

  const onSubmit = methods.handleSubmit((data) => {
    setText(data.text);
  });

  return { methods, onSubmit };
};
