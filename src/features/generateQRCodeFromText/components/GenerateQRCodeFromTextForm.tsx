'use client';

import { FormProvider } from 'react-hook-form';

import ContentWrapper from '@/components/ContentWrapper';
import Form from '@/components/form/Form';
import FormTextArea from '@/components/form/FormTextArea';
import Button from '@/components/Button';

import { dictionary } from '@/shared/ditctionary';
import GenerateLogoForQRCode from '@/features/generateLogoForQRCode/GenerateLogoForQRCode';

import { useGenerateQRCodeFromTextForm } from '../hooks/useGenerateQRCodeFromTextForm';

import { FORM_FIELDS, FORM_FIELDS_ATTRIBUTES } from '../constants';

const GenerateQRCodeFromTextForm = () => {
  const { methods, onSubmit } = useGenerateQRCodeFromTextForm();

  return (
    <ContentWrapper className="p-6 bg-gray-100">
      <FormProvider {...methods}>
        <Form onSubmit={onSubmit}>
          <ContentWrapper>
            <ContentWrapper className="flex flex-col gap-5">
              <FormTextArea
                formField={FORM_FIELDS.TEXT}
                id={FORM_FIELDS_ATTRIBUTES[FORM_FIELDS.TEXT].ID}
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

export default GenerateQRCodeFromTextForm;
