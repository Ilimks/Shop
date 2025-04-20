import styles from './ContactsSection.module.scss'

export const ContactsSection: React.FC = () => {
    return (
        <section className={styles.contacts}>
            <div className="container">
                <h1 className={styles.contacts__name}>Контакты</h1>
                <div className={styles.contacts__box}>

                    <div className={styles.contacts__box__left}>
                        <div className={styles.contacts__box__left__phone1}>
                            <p>Телефоны</p>
                            <h3><a href="tel:+996706999999">0(706)99-99-99</a></h3>
                            <h3><a href="tel:+996706888888">0(706)88-88-88</a></h3>
                        </div>
                        <div className={styles.contacts__box__left__email}>
                            <p>Email</p>
                            <h3><a href="mailto:ilimk9731@gmail.com">ilimk9731@gmail.com</a></h3>
                        </div>
                        <div className={styles.contacts__box__left__address}>
                            <p>Адресс</p>
                            <h3>г. Бишкек р/к Орто-Сай</h3>
                        </div>
                        <div className={styles.contacts__box__left__social}>
                            <p>Социальные сети</p>
                            <div className={styles.contacts__box__left__social__imgs}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.contacts__box__right}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.5939641571565!2d74.5337469758397!3d42.84123867115973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ecb0a4ab5c6c3%3A0x8b83786eab2d27fc!2z0J7QsdC40LvQtdC90LjQuiDQotCw0YDQutC-0LLQsNGC0YPRgdGC0YwsINCc0LjQvdCw0YDQuNGC0LXRgiDQnNC40YDQutGD0YDQsNC00YHRgtGA0LDQvQ!5e0!3m2!1sru!2skg!4v1713446742872!5m2!1sru!2skg"
                            width="900"
                            height="400"
                            style={{ border: 0, borderRadius: '20px' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
