"use client"
import { useRouter } from 'next/navigation';
import styles from './Header.module.scss'
import Image from "next/image";

export const Header: React.FC = () => {

    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__box}>

                    <h3 onClick={() => router.push('/')} className={styles.header__logo}>Belle Nuit</h3>

                    <nav className={styles.header__nav}>
                        <ul className={styles.header__nav__ul}>
                            <li onClick={() => router.push('/pajamas')} className={styles.header__nav__li}>Пижамы</li>
                            <li onClick={() => router.push('/suits')} className={styles.header__nav__li}>Костюмы</li>
                            <li onClick={() => router.push('/robes')} className={styles.header__nav__li}>Халаты</li>
                            <li onClick={() => router.push('/contacts')} className={styles.header__nav__li}>Контакты</li>
                        </ul>
                    </nav>

                    <div className={styles.header__box__right}>
                        <Image onClick={() => router.push('/account')} className={styles.header__box__right__account} src="/assets/icons/AccountIcon.svg" alt="Иконка Аккаунт" width={28} height={28} />
                        <Image onClick={() => router.push('/cart')} className={styles.header__box__right__cart} src="/assets/icons/CartIcon.svg" alt="Иконка Корзина" width={28} height={28} />
                    </div>

                </div>
            </div>
        </header>
    )
}