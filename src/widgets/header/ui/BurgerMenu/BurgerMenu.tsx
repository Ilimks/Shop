import { useEffect } from 'react';
import { NavigationBurger } from '../NavigationBurger/NavigationBurger';
import styles from './BurgerMenu.module.scss';
import { BurgerProps } from '@/shared/types/types';

export const BurgerMenu: React.FC<BurgerProps> = ({ isOpen, onToggle, onClose }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={styles.burger}
        onClick={onToggle}
        aria-label="Меню"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <NavigationBurger isOpen={isOpen} onClose={onClose} />
    </>
  );
};
