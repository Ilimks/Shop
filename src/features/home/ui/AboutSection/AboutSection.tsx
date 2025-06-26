import { AboutSwiper } from '@/widgets/aboutSwiper/AboutSwiper'
import styles from './AboutSection.module.scss'
import mobile from './AboutSectionMobile.module.scss'

export const AboutSection: React.FC = () => {
    return (
        <section className={`${styles.about} ${mobile.about}`}>
            <div className="container">
                <div className={`${styles.about__box} ${mobile.about__box}`}>
                    <AboutSwiper/>
                </div>
            </div>
        </section>
    )
}