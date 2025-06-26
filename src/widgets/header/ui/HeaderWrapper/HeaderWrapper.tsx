"use client"
import { useState } from 'react'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import styles from './HeaderWrapper.module.scss'
import Image from 'next/image'

export const HeaderWrapper: React.FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurgerToggle = () => {
      setIsBurgerOpen((prev) => !prev);
    };
  
    const handleCloseBurger = () => {
      setIsBurgerOpen(false);
    };

    return (
        <div className={styles.wrapper}>
            <a href="https://t.me/ilimk4" target="_blank" rel="noopener noreferrer">
                <img className={styles.wrapper__telega} src="/assets/icons/HeaderTelega.svg" alt="Telegram" width={24} height={24} />
            </a>
            <a href="https://wa.me/996706030725" target="_blank" rel="noopener noreferrer">
                <img className={styles.wrapper__whatsApp} src="/assets/icons/HeaderWhatsapp.svg" alt="WhatsApp" width={24} height={24} />
            </a>
            <BurgerMenu
              isOpen={isBurgerOpen}
              onToggle={handleBurgerToggle}
              onClose={handleCloseBurger}
            />
        </div>
    )
}