import Image from 'next/image';
import Link from 'next/link';
import styles from './ContactButton.module.scss';

export const ContactButton = () => {
    return (
        <Link href="/contacts" className={styles.contactButton}>
            <Image
              className={styles.header__box__right__cart}
              src="/assets/icons/Contact.svg"
              alt="Иконка Контакт"
              width={24}
              height={24}
            />
            <span className={styles.name}>Контакты</span>
        </Link>
    );
};
