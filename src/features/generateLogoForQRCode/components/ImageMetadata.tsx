'use client';

import ContentWrapper from '@/components/ContentWrapper';
import { useFormContext, useWatch } from 'react-hook-form';

import { bytesToKB } from '@/utils/convert/bytesToKB';

import { dictionary } from '@/shared/ditctionary';

import Text from '@/components/Text';

interface ImageMetadataProps {
  formField: string;
}

const ImageMetadata = ({ formField }: ImageMetadataProps) => {
  const { control } = useFormContext();
  const logoValue = useWatch({ control, name: formField }) ?? [];

  const logoName = logoValue[0]?.name;
  const logoSize = logoValue[0]?.size ? bytesToKB(logoValue[0]?.size).toFixed(2) : null;

  return (
    <ContentWrapper className="flex flex-col gap-1">
      {logoSize && <Text content={dictionary.fileSizeInKB(logoSize)} />}
      {logoName && <Text content={dictionary.fileName(logoName)} />}
    </ContentWrapper>
  );
};

export default ImageMetadata;
