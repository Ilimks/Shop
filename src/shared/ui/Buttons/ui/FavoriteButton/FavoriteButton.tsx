"use client"
import Image from 'next/image'
import styles from './FavoriteButton.module.scss'
import { useRouter } from 'next/navigation';

export const FavoriteButton = () => {

    const router = useRouter();

    return (
        <div className={styles.favoriteButton}>
            <Image
              onClick={() => router.push('/cart')} 
              className={styles.header__box__right__cart} 
              src="/assets/icons/Favorite.svg" 
              alt="Иконка Корзина" 
              width={24} 
              height={24} 
            />
            <span className={styles.name}>
                Избранное
            </span>
        </div>
    )
}