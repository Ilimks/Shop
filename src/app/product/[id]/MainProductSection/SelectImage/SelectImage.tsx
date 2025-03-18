"use client";
import { useState } from "react";
import styles from "./SelectImage.module.scss";
import Image from "next/image";
import { IProduct } from "../../../../types";

interface SelectImageProps {
  product: IProduct;
}

const SelectImage: React.FC<SelectImageProps> = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className={styles.select_image}>
      <div className={styles.select_image_items}>
        {product.images.map((el, index) => (
          <Image
            key={index}
            src={el}
            width={152}
            height={167}
            alt="select_image"
            onClick={() => setSelectedIndex(index)}
            className={`${styles.image} ${
              selectedIndex === index ? styles.selected : ""
            }`}
          />
        ))}
      </div>
      <div className={styles.selected_image}>
        <div>
          <Image
            src={product.images[selectedIndex]}
            width={444}
            height={530}
            alt="Большое изображение"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectImage;
