import Image from 'next/image';
import Link from 'next/link';
import styles from './CartButton.module.scss';

export const CartButton = () => {
  return (
    <Link href="/cart" className={styles.cartButton}>
      <Image
        className={styles.header__box__right__cart}
        src="/assets/icons/Cart.svg"
        alt="Иконка Корзина"
        width={24}
        height={24}
      />
      <span className={styles.name}>Корзина</span>
    </Link>
  );
};
