"use client"
import { useState } from "react";
import Image from "next/image";
import styles from './ProductCard.module.scss';
import mobile from './ProductCardMobile.module.scss';
import { ProductCardProps } from '@/shared/types/types';
import { Button } from "@/shared/ui/Buttons/ui/Button";

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, maker, oldPrice }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <div className={`${styles.productCard} ${mobile.productCard}`}>
      <Image
        className={`${styles.productCard__image} ${mobile.productCard__image}`}
        src={image}
        alt={title}
        width={204}
        height={270}
      />

      <div 
        className={`${styles.productCard__icons} ${mobile.productCard__icons}`} 
        onClick={handleFavoriteClick} 
        style={{ cursor: "pointer" }}
      >
        <Image 
          src={isFavorite ? '/assets/icons/FavoritesIcon2.svg' : '/assets/icons/FavoritesIcon1.svg'} 
          alt="Favorites Icon" 
          width={44} 
          height={44}
        />
      </div>

      <div className={`${styles.productCard__content} ${mobile.productCard__content}`}>
        <h3 className={`${styles.productCard__title} ${mobile.productCard__title}`}>{title}</h3>

        <div className={`${styles.productCard__details} ${mobile.productCard__details}`}>
          <div className={`${styles.productCard__sizes} ${mobile.productCard__sizes}`}>
            <p className={`${styles.productCard__sizesText} ${mobile.productCard__sizesText}`}>XS - XL</p>
          </div>

          <div className={`${styles.productCard__colors} ${mobile.productCard__colors}`}>
            <div className={`${styles.productCard__color} ${mobile.productCard__color}`}></div>
            <div className={`${styles.productCard__color} ${mobile.productCard__color}`}></div>
            <div className={`${styles.productCard__color} ${mobile.productCard__color}`}></div>
          </div>
        </div>

        <div className={`${styles.productCard__maker} ${mobile.productCard__maker}`}>
          <p className={`${styles.maker} ${mobile.maker}`}>{maker}</p>
        </div>

        <div className={`${styles.productCard__priceWrapper} ${mobile.productCard__priceWrapper}`}>
          <p className={`${styles.productCard__price} ${mobile.productCard__price}`}>{price} сом</p>
          <p className={`${styles.productCard__oldPrice} ${mobile.productCard__oldPrice}`}>{oldPrice} сом</p>
        </div>

        <Button
          text="В корзину"
          onClick={() => console.log('В корзину')}
          variant="card"
          size="cardSize"
        />
      </div>
    </div>
  );
};
