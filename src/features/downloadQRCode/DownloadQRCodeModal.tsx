'use client';

import { useState } from 'react';

import ContentWrapper from '@/components/ContentWrapper';

import Modal from '@/common/modal/Modal';
import { dictionary } from '@/shared/ditctionary';
import DownloadQRCodeAsSvgButton from './DownloadQRCodeAsSvgButton';

import { useQRCodeStore } from '../QRCode/useQRCodeStore';

const DownloadQRCodeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isQRCodeValue = Boolean(useQRCodeStore((store) => store.text));

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      buttonContent={dictionary.download}
      buttonDisabled={!isQRCodeValue}
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <ContentWrapper className="w-[300px] h-[400px]">
        <DownloadQRCodeAsSvgButton />
      </ContentWrapper>
    </Modal>
  );
};

export default DownloadQRCodeModal;
