"use client"
import Image from 'next/image'
import styles from './CartButton.module.scss'
import { useRouter } from 'next/navigation';

export const CartButton = () => {

    const router = useRouter();

    return (
        <div className={styles.cartButton}>
            <Image
              onClick={() => router.push('/cart')} 
              className={styles.header__box__right__cart} 
              src="/assets/icons/Cart.svg" 
              alt="Иконка Корзина" 
              width={24} 
              height={24} 
            />
            <span className={styles.name}>
                Корзина
            </span>
        </div>
    )
}