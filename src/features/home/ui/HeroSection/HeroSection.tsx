import styles from './HeroSection.module.scss'
import mobile from './HeroSectionMobile.module.scss'
import Image from 'next/image'

export const HeroSection: React.FC = () => {

    return (
        <section className={`${styles.hero} ${mobile.hero}`}>
            <Image
                className={`${styles.hero__img} ${mobile.hero__img}`}
                src="/assets/images/hero.webp"
                alt='Banner'
                fill
                priority
                quality={80}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            <div className="container">
                <div className={`${styles.hero__box} ${mobile.hero__box}`}>
                    <h1 className={`${styles.hero__title} ${mobile.hero__title}`}>Летняя коллекция</h1>
                    <p className={`${styles.hero__text} ${mobile.hero__text}`}>Отдайте свой выбор Belle nuit — и мы подарим вам волшебные ночи!</p>
                    <button className={`${styles.hero__btn} ${mobile.hero__btn}`}>Каталог</button>
                </div>
            </div>
        </section>
    )
}