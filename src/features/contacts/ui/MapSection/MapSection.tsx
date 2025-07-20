import styles from './MapSection.module.scss'

export const MapSection: React.FC = () => {
    return (
        <section className={styles.map}>
            <div className="container">
                <div className={styles.map__box}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.3493848907016!2d74.602353!3d42.874621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d14f0135d1%3A0xf43a0c430b60d291!2sBishkek!5e0!3m2!1sru!2skg!4v1719160133894!5m2!1sru!2skg"
                      width="100%"
                      height="645"
                      style={{ border: "none", borderRadius: "10px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Карта местоположения"
                    />
                </div>
            </div>
        </section>
    )
}