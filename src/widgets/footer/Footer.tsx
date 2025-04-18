"use client"
import { useRouter } from 'next/navigation';
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {

    const router = useRouter();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__box}>

                    <div className={styles.footer__catalog}>
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
                    </div>

                </div>
            </div>
        </footer>
    )
}