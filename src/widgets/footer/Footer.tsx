"use client"
import { useRouter } from 'next/navigation';
import styles from './Footer.module.scss'
import Image from 'next/image';

export const Footer: React.FC = () => {

    const router = useRouter();

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
                            <Image 
                              className={styles.telega} 
                              src="/assets/icons/Telega.svg" 
                              alt="Иконка Telega" 
                              width={28} 
                              height={28} 
                            />
                            <Image 
                              className={styles.insta} 
                              src="/assets/icons/Insta.svg" 
                              alt="Иконка Insta" 
                              width={28} 
                              height={28} 
                            />
                            <Image 
                              className={styles.whatsApp} 
                              src="/assets/icons/WhatsApp.svg" 
                              alt="Иконка WhatsApp" 
                              width={28} 
                              height={28} 
                            />
                        </div>
                    </div>

                    <div className={styles.footer__center1}>
                        <h3 className={styles.title}>Контакты</h3>
                        <nav className={styles.footer__nav}>
                            <ul className={styles.nav__ul}>
                                <li onClick={() => router.push('/account')} className={styles.nav__ul__li1}>Ортосайский рынок,
                                2 ряд, 5 контейнер</li>
                                <li onClick={() => router.push('/')} className={styles.nav__ul__li2}>ilimk9731@gmail.com</li>
                                <li onClick={() => router.push('/cart')} className={styles.nav__ul__li3}>+996 555 444 123</li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.footer__center2}>
                        <h3 className={styles.title}>Аккаунт</h3>
                        <nav className={styles.footer__nav}>
                            <ul className={styles.nav__ul}>
                                <li onClick={() => router.push('/account')} className={styles.nav__ul__li}>Войти в аккаунт</li>
                                <li onClick={() => router.push('/')} className={styles.nav__ul__li}>Избранное</li>
                                <li onClick={() => router.push('/cart')} className={styles.nav__ul__li}>Корзина</li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.footer__right}>
                        <h3 className={styles.title}>Навигация</h3>
                        <nav className={styles.footer__nav}>
                            <ul className={styles.nav__ul}>
                                <li onClick={() => router.push('/')} className={styles.nav__ul__li}>Главная</li>
                                <li onClick={() => router.push('/')} className={styles.nav__ul__li}>Каталог</li>
                                <li onClick={() => router.push('/pajamas')} className={styles.nav__ul__li}>Пижама</li>
                                <li onClick={() => router.push('/suits')} className={styles.nav__ul__li}>Костюм</li>
                                <li onClick={() => router.push('/robes')} className={styles.nav__ul__li}>Халат</li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <p className={styles.footer__rights}>© 2025 Все права</p>
            </div>
        </footer>
    )
}



{/* <div className={styles.footer__catalog}>
                        <h2 className={styles.footer__catalog__name}>КАТАЛОГ</h2>
                        <nav className={styles.footer__catalog__nav}>
                            <ul className={styles.footer__catalog__ul}>
                                <li onClick={() => router.push('/pajamas')} className={styles.footer__catalog__li}>Пижамы</li>
                                <li onClick={() => router.push('/suits')} className={styles.footer__catalog__li}>Костюмы</li>
                                <li onClick={() => router.push('/robes')} className={styles.footer__catalog__li}>Халаты</li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.footer__info}>
                        <h2 className={styles.footer__info__name}>ИНФОРМАЦИЯ</h2>
                        <nav className={styles.footer__info__nav}>
                            <ul className={styles.footer__info__ul}>
                                <li className={styles.footer__info__li}>Доставка и оплата</li>
                                <li className={styles.footer__info__li}>Обмен и возврат</li>
                                <li onClick={() => router.push('/contacts')} className={styles.footer__info__li}>Контакты</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className={styles.footer__contacts}>
                        <h2 className={styles.footer__contacts__name}>КОНТАКТЫ</h2>
                        <nav className={styles.footer__contacts__nav}>
                            <ul className={styles.footer__contacts__ul}>
                                <li className={styles.footer__contacts__li}><a href="tel:+996706999999">0(706)99-99-99</a></li>
                                <li className={styles.footer__contacts__li}><a href="tel:+996706888888">0(706)88-88-88</a></li>
                                <li className={styles.footer__contacts__li}><a href="mailto:ilimk9731@gmail.com">ilimk9731@gmail.com</a></li>
                            </ul>
                            <div className={styles.footer__info__social}>

                            </div>
                        </nav>
                    </div> */}