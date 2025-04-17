import styles from './СategorySection.module.scss';
import Image from "next/image";

export const CategorySection: React.FC = () => {

    const categoryCard = [
        {img: "/assets/images/images.jpg", title: "Пижамы"},
        {img: "/assets/images/halat.jpg", title: "Халаты"},
        {img: "/assets/images/2.webp", title: "Костюмы"},
    ]
    return (
        <section className={styles.category}>
            <div className="container">
                <div className={styles.category__box}>
                    <h3 className={styles.category__box__name}>Категории</h3>
                    <p className={styles.category__box__text}>Уютные пижамы, халаты и домашние костюмы для комфорта каждый день.</p>
                    <div className={styles.category__box__items}>
                        {categoryCard.map((el,idx) =>(
                            <div key={idx} className={styles.category__box__item}>
                                <Image className={styles.category__box__item__img} src={el.img} alt="" width={380} height={480} />
                                <h4 className={styles.category__box__item__name}>{el.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}