'use client';

import ContentWrapper from '@/components/ContentWrapper';
import Button from '@/components/Button';

import { ALLOWED_IMAGE_FILE_TYPES } from '../constants';

import { useUploadImage } from '../hooks/useUploadImage';

interface GenerateLogoForQRCodeButtonProps {
  id: string;
  formField: string;
}

const GenerateLogoForQRCodeButton = ({ id, formField }: GenerateLogoForQRCodeButtonProps) => {
  const { handleUploadClick, registerProps, fileInputRef } = useUploadImage({ formField });

  return (
    <ContentWrapper>
      <input
        accept={ALLOWED_IMAGE_FILE_TYPES.join(', ')}
        id={id}
        type="file"
        className="hidden"
        {...registerProps}
        ref={(e) => {
          fileInputRef.current = e;
          registerProps.ref(e);
        }}
      />
      <Button
        onClick={handleUploadClick}
        content="Upload Photo"
      />
    </ContentWrapper>
  );
};

export default GenerateLogoForQRCodeButton;
