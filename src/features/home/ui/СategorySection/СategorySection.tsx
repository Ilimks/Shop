import { CategorySwiper } from '@/widgets/categorySwiper/CategorySwiper';
import styles from './СategorySection.module.scss';
import mobile from './СategorySectionMobile.module.scss';

export const CategorySection: React.FC = () => {
  return (
    <section className={`${styles.category} ${mobile.category}`}>
        <div className={`container ${mobile.container}`}>
            <div className={`${styles.category__box} ${mobile.category__box}`}>
                <p className={`${styles.category__text} ${mobile.category__text}`}>За всё время</p>
                <h3 className={`${styles.category__title} ${mobile.category__title}`}>Поиск по категориям</h3>
                <div className={`${styles.category__items} ${mobile.category__items}`}>
                    <CategorySwiper />
                </div>
            </div>
        </div>
    </section>
  );
};
