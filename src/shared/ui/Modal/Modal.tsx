import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { ModalProps } from '@/shared/types/types';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      document.body.classList.add(styles.bodyNoScroll);
    } else {
      document.body.classList.remove(styles.bodyNoScroll);
    }

    return () => {
      if (document.body.classList.contains(styles.bodyNoScroll)) {
        document.body.classList.remove(styles.bodyNoScroll);
      }
    };
  }, [isOpen, mounted]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalBackdrop} onClick={onClose} />
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};