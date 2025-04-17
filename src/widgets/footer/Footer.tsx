import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__box}>

                    <div className={styles.footer__catalog}>
                        <h2>КАТАЛОГ</h2>
                        <nav className={styles.footer__catalog__nav}>
                            <ul className={styles.footer__catalog__ul}>
                                <li className={styles.footer__catalog__li}>Пижамы</li>
                                <li className={styles.footer__catalog__li}>Костюмы</li>
                                <li className={styles.footer__catalog__li}>Халаты</li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.footer__info}>
                        <h2>ИНФОРМАЦИЯ</h2>
                        <nav className={styles.footer__info__nav}>
                            <ul className={styles.footer__info__ul}>
                                <li className={styles.footer__info__li}>Доставка и оплата</li>
                                <li className={styles.footer__info__li}>Обмен и возврат</li>
                                <li className={styles.footer__info__li}>Контакты</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className={styles.footer__info}>
                        <h2>КОНТАКТЫ</h2>
                        <nav className={styles.footer__info__nav}>
                            <ul className={styles.footer__info__ul}>
                                <li className={styles.footer__info__li}><a href="">0(706)99-99-99</a></li>
                                <li className={styles.footer__info__li}><a href="">0(706)88-88-88</a></li>
                                <li className={styles.footer__info__li}><a href="">0(706)77-77-77</a></li>
                                <li className={styles.footer__info__li}>ilimk9731@gmail.com</li>
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