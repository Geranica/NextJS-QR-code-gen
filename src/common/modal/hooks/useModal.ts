import { useEffect, MouseEvent, useRef } from 'react';

interface UseModalParams {
  isOpen: boolean;
  onClose: () => void;
}

export const useModal = ({ isOpen }: UseModalParams) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleStopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.classList.add('overflow-hidden');
    } else {
      dialogRef.current?.close();
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return { handleStopPropagation, dialogRef };
};
