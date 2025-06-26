import { Product } from "@/entities/product/model/types";
import { AddToCart } from "@/features/cart/AddToCart";
import { PhotoSlider } from "@/shared/ui/PhotoSlider";
import React from "react";

import styles from './ProductDeatails.module.scss'

export const ProductDetails: React.FC<Product> = (product) => {
  const {
    id,
    name,
    description,
    price,
    madeIn,
    categoryId,
    createdAt,
    mainImage,
    additionalImages,
    stock,
  } = product;
  return (
    <div className="container">
      <div className={styles.detailsWrap}>
        <PhotoSlider images={[mainImage, ...additionalImages]} />
        <div className={styles.detailsInfo}>
          <h1>{name}</h1>
        <p>{price}</p>
        <div>
          <h2>Характеристики:</h2>
          <ul>
            <li>
              <span>Пол:</span>
              <span>{}</span>
            </li>
            <li> 
              <span>Состав:</span>
              <span>{}</span>
            </li>
            <li>
              <span>Цвета:</span>{" "}
            </li>
            <li>
              <span>Производство:</span>
              <span>{madeIn}</span>
            </li>
            <li>
              <span>Размер:</span>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h2>Описание товара:</h2>
          <p>{description}</p>
        </div>
        <div>
          <AddToCart product={product} />
        </div>
        </div>
      </div>
    </div>
  );
};
