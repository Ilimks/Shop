import Image from 'next/image';
import Link from 'next/link';
import styles from './FavoriteButton.module.scss';

export const FavoriteButton = () => {
  return (
    <Link href="/cart" className={styles.favoriteButton}>
      <Image
        className={styles.header__box__right__cart}
        src="/assets/icons/Favorite.svg"
        alt="Иконка Корзина"
        width={24}
        height={24}
      />
      <span className={styles.name}>Избранное</span>
    </Link>
  );
};
