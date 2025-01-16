'use client';

import { FormProvider } from 'react-hook-form';

import ContentWrapper from '@/components/ContentWrapper';
import Form from '@/components/form/Form';
import Button from '@/components/Button';
import FormInputText from '@/components/form/FormInputText';

import { dictionary } from '@/shared/ditctionary';
import GenerateLogoForQRCode from '@/features/generateLogoForQRCode/GenerateLogoForQRCode';

import { useGenerateQRCodeFromUrlForm } from '../hooks/useGenerateQRCodeFromUrlForm';

import { FORM_FIELDS, FORM_FIELDS_ATTRIBUTES } from '../constants';

const GenerateQRCodeFromUrlForm = () => {
  const { methods, onSubmit } = useGenerateQRCodeFromUrlForm();

  return (
    <ContentWrapper className="p-6 bg-gray-100">
      <FormProvider {...methods}>
        <Form onSubmit={onSubmit}>
          <ContentWrapper>
            <ContentWrapper className="flex flex-col gap-5">
              <FormInputText
                formField={FORM_FIELDS.URL}
                id={FORM_FIELDS_ATTRIBUTES[FORM_FIELDS.URL].ID}
                placeholder={dictionary.inputTextPlaceholder}
              />
              <GenerateLogoForQRCode
                id={FORM_FIELDS_ATTRIBUTES[FORM_FIELDS.LOGO].ID}
                formField={FORM_FIELDS.LOGO}
              />
              <Button
                content={dictionary.createQRCode}
                type="submit"
              />
            </ContentWrapper>
          </ContentWrapper>
        </Form>
      </FormProvider>
    </ContentWrapper>
  );
};

export default GenerateQRCodeFromUrlForm;
