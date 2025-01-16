'use client';

import { useForm } from 'react-hook-form';

import { useQRCodeStore } from '@/features/QRCode/useQRCodeStore';
import { transformFileToBase64 } from '@/utils/convert/transformFileToBase64';
import { zodResolver } from '@hookform/resolvers/zod';

import { FORM_INITIAL_VALUES } from '../constants';

import { validationSchema } from '../validationSchema';

import { FormInput } from '../types';

export const useGenerateQRCodeFromUrlForm = () => {
  const methods = useForm<FormInput>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const setValue = useQRCodeStore((store) => store.setValue);
  const setLogo = useQRCodeStore((store) => store.setLogo);

  const onSubmit = methods.handleSubmit(async (data) => {
    setValue(data.url);

    if (data.logo) {
      const logoBase64 = await transformFileToBase64(data.logo[0]);
      setLogo(logoBase64);
    }
  });

  return { methods, onSubmit };
};
