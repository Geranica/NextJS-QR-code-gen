'use client';

import { useForm } from 'react-hook-form';

import { useQRCodeStore } from '@/features/QRCode/useQRCodeStore';
import { transformFileToBase64 } from '@/utils/convert/transformFileToBase64';
import { FORM_INITIAL_VALUES } from '../constants';

import { FormInput } from '../types';

export const useGenerateQRCodeFromTextForm = () => {
  const methods = useForm<FormInput>({ defaultValues: FORM_INITIAL_VALUES });

  const setText = useQRCodeStore((store) => store.setText);
  const setLogo = useQRCodeStore((store) => store.setLogo);

  const onSubmit = methods.handleSubmit(async (data) => {
    setText(data.text);

    if (data.logo) {
      const logoBase64 = await transformFileToBase64(data.logo[0]);
      setLogo(logoBase64);
    }
  });

  return { methods, onSubmit };
};
