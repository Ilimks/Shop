"use client";

import React, { useState } from "react";
import { Product, StockItem } from "@/entities/product/model/types";
import { AddToCart } from "@/features/cart/AddToCart";
import { PhotoSlider } from "@/shared/ui/PhotoSlider";

import styles from "./ProductDeatails.module.scss";
import { Size } from "@/shared/ui/Size";
import { Color } from "@/shared/ui/Color";

const mockSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const mockColors = ["#333333", "red", "blue"];

// export const ProductFilters: React.FC<StockItem> = (stockItem) => {
//   const [color, setColor] = useState<string | null>(null);
//   const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
//   return (
//     <>
//       <dt>Цвет:</dt>
//       <dd>
//         <Color colors={mockColors} selectedColor={color} onSelect={setColor} />
//       </dd>
//       <dt>Размер:</dt>
//       <dd>
//         <Size
//           selectedSizes={selectedSizes}
//           setSelectedSizes={setSelectedSizes}
//         />
//       </dd>
//     </>
//   );
// };

export const ProductDetails: React.FC<Product> = (product) => {
  const {
    id,
    name,
    description,
    price,
    madeIn,
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
          <div className={styles.prices}>
            <b>{price} сом</b>
          </div>
          <div>
            <h2>Характеристики:</h2>
            <dl className={styles.productDetailsList}>
              <dt>Пол: </dt>
              <dd>...</dd>
              <dt>Состав: </dt>
              <dd>...</dd>
              <dt>Производство: </dt>
              <dd>{madeIn}</dd>
              {/* <ProductFilters
                size={stock[0].size}
                color={stock[0].color}
                quantity={stock[0].quantity}
              /> */}
            </dl>
          </div>
          <div className={styles.description}>
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
