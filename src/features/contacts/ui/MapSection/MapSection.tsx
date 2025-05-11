import styles from './MapSection.module.scss'

export const MapSection: React.FC = () => {
    return (
        <section className={styles.map}>
            <div className="container">
                <div className={styles.map__box}>
                    <iframe
                     src="https://2gis.kg/bishkek/embed/70000001020282611?zoom=16"
                     width="100%"
                     height="645"
                     style={{ border: 'none', borderRadius: '10px' }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="2GIS Карта местоположения"
                    />
                </div>
            </div>
        </section>
    )
}