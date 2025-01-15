import { ReactNode } from 'react';

import Button from '@/components/Button';

import CrossIcon from '@/components/icons/CrossIcon';
import ContentWrapper from '@/components/ContentWrapper';
import { useModal } from './hooks/useModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  buttonContent: ReactNode;
  buttonDisabled: boolean;
  onOpen: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  onOpen,
  children,
  buttonContent,
  buttonDisabled,
}: ModalProps) => {
  const { handleStopPropagation, dialogRef } = useModal({
    isOpen,
    onClose,
  });

  return (
    <ContentWrapper>
      <Button
        onClick={onOpen}
        disabled={buttonDisabled}
        content={buttonContent}
      />

      {/* eslint-disable-next-line */}
      <dialog
        onCancel={onClose}
        ref={dialogRef}
        onClick={onClose}
        className={`bg-white p-6 rounded-lg fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} backdrop:bg-black/50 backdrop:backdrop-blur-md`}
      >
        {/* eslint-disable-next-line */}
        <div onClick={handleStopPropagation}>
          <button
            onClick={onClose}
            type="button"
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            <CrossIcon />
          </button>
          {children}
        </div>
      </dialog>
    </ContentWrapper>
  );
};

export default Modal;
