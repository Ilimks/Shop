import Image from "next/image";
import styles from './ProductCard.module.scss';
import { ProductCardProps } from '@/shared/types/types';

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, maker }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <Image className={styles.card__img} src={image} alt={title} width={300} height={200}/>
      <div className={styles.card__box}>
        <h3 className={styles.card__box__title}>{title}</h3>
        <p className={styles.card__box__maker}>{maker}</p>
        <p className={styles.card__box__price}>Цена: {price} сом</p>
      </div>
    </div>
  );
}