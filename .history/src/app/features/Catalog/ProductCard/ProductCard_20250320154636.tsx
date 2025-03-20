"use client";
import React from "react";
import mockClothingProducts from "@/app/mock/index"; 
import { IProduct } from "../../../types"; 
import styles from "./ProductCard.module.scss"; 
import CardImage from "./CardImage/CardImage";
import RecomendCard from "./RecomendCard/RecomendCard";

const ProductCard = () => {
  const selectedProducts = mockClothingProducts.slice(9, 13) as IProduct[];

  if (!selectedProducts.length) {
    return <div>Продукты не найдены</div>;
  }

  return (
    <div className={styles.recomend}>
      <h2>You might also like</h2>
    <div className="container">
    <div className={styles.recommendedCardsContainer}>
      {selectedProducts.map((product) => (
        <div key={product.id} className={styles.cardItem}>
          <CardImage product={product} />
          <RecomendCard product={product}/>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default ProductCard;
