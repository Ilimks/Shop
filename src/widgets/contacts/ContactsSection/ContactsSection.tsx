import styles from './ContactsSection.module.scss'

export const ContactsSection: React.FC = () => {
    return (
        <section className={styles.contacts}>
            <div className="container">
                <div className={styles.contacts__box}>
                    <h2 className={styles.contacts__name}>Контакты</h2>
                    <div className={styles.contacts__сonnection}>
                        <div className={styles.contacts__сonnection__left}>
                            <h3 className={styles.contacts__сonnection__left__name}>СВЯЖИТЕСЬ С НАМИ</h3>
                            <div className={styles.contacts__сonnection__left__address}>

                            </div>
                        </div>
                        <div className={styles.contacts__сonnection__right}>
                            <h3 className={styles.contacts__сonnection__right__name}>АДРЕС</h3>
                            <div className={styles.contacts__сonnection__right__map}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}