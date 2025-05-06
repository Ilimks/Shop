"use client"
import Image from 'next/image'
import styles from './ContactButton.module.scss'
import { useRouter } from 'next/navigation';

export const ContactButton = () => {

    const router = useRouter();

    return (
        <div className={styles.contactButton}>
            <Image
              onClick={() => router.push('/contacts')} 
              className={styles.header__box__right__cart} 
              src="/assets/icons/Contact.svg" 
              alt="Иконка Контакт" 
              width={24} 
              height={24} 
            />
            <span className={styles.name}>
                Контакты
            </span>
        </div>
    )
}