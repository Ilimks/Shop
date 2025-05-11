"use client"
import { useRouter } from 'next/navigation';
import styles from './Footer.module.scss'
import Image from 'next/image';

export const Footer: React.FC = () => {
    const router = useRouter();

    const contactItems = [
        { text: 'Ортосайский рынок, 2 ряд, 5 контейнер', icon: 'FooterLocation', onClick: () => router.push('/account') },
        { text: 'ilimk9731@gmail.com', icon: 'FooterEmail', onClick: () => router.push('/') },
        { text: '+996 555 444 123', icon: 'FooterPhone', onClick: () => router.push('/cart') }
    ];

    const accountItems = [
        { text: 'Войти в аккаунт', onClick: () => router.push('/account') },
        { text: 'Избранное', onClick: () => router.push('/') },
        { text: 'Корзина', onClick: () => router.push('/cart') }
    ];

    const navItems = [
        { text: 'Главная', onClick: () => router.push('/') },
        { text: 'Каталог', onClick: () => router.push('/') },
        { text: 'Пижама', onClick: () => router.push('/pajamas') },
        { text: 'Костюм', onClick: () => router.push('/suits') },
        { text: 'Халат', onClick: () => router.push('/robes') }
    ];

    const socialIcons = [
        { src: '/assets/icons/Telega.svg', alt: 'Иконка Telega', className: styles.telega },
        { src: '/assets/icons/Insta.svg', alt: 'Иконка Insta', className: styles.insta },
        { src: '/assets/icons/WhatsApp.svg', alt: 'Иконка WhatsApp', className: styles.whatsApp }
    ];

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__box}>
                    <div className={styles.footer__left}>
                        <Image 
                            className={styles.footer__left__logo} 
                            src="/assets/icons/FooterLogo.svg" 
                            alt="Иконка FooterLogo" 
                            width={177} 
                            height={116} 
                        />
                        <div className={styles.line}></div>
                        <p className={styles.text}>Belle Nuit — пижамы для снов, которые хочется повторить</p>
                        <div className={styles.footer__left__social}>
                            {socialIcons.map((icon, index) => (
                                <Image 
                                    key={index}
                                    className={icon.className} 
                                    src={icon.src} 
                                    alt={icon.alt} 
                                    width={28} 
                                    height={28} 
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.footer__center1}>
                        <h3 className={styles.title}>Контакты</h3>
                        <nav className={styles.footer__nav}>
                            <ul className={styles.nav__ul}>
                                {contactItems.map((item, index) => (
                                    <li 
                                        key={index}
                                        onClick={item.onClick}
                                        className={styles[`nav__ul__li${index + 1}`]}
                                    >
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.footer__center2}>
                        <h3 className={styles.title}>Аккаунт</h3>
                        <nav className={styles.footer__nav}>
                            <ul className={styles.nav__ul}>
                                {accountItems.map((item, index) => (
                                    <li 
                                        key={index}
                                        onClick={item.onClick}
                                        className={styles.nav__ul__li}
                                    >
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.footer__right}>
                        <h3 className={styles.title}>Навигация</h3>
                        <nav className={styles.footer__nav}>
                            <ul className={styles.nav__ul}>
                                {navItems.map((item, index) => (
                                    <li 
                                        key={index}
                                        onClick={item.onClick}
                                        className={styles.nav__ul__li}
                                    >
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <p className={styles.footer__rights}>© 2025 Все права</p>
            </div>
        </footer>
    )
};