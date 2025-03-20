"use client";
import { useState } from "react";
import Image from "next/image";
import { IProduct } from "../../../../types";
import styles from "./CardImage.module.scss";

interface CardImageProps {
  product: IProduct;
}

const CardImage: React.FC<CardImageProps> = ({ product }) => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const images = Array.isArray(product.images) ? product.images : [product.images];

  return (
    <div className={styles.card_image}>
      <div className={styles.card_image_items}>
        {images.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            width={295}
            height={298}
            alt={`Image of ${product.title}`}
            onClick={() => setCardIndex(index)}  
            className={`${styles.image} ${
              cardIndex === index ? styles.card : ""
            }`}  
          />
        ))}
      </div>
    </div>
  );
};

export default CardImage;
