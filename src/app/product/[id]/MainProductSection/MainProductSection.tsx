"use client";
import React from "react";
import SelectImage from "./SelectImage/SelectImage";
import { IProduct } from "../../../types";
import styles from "./MainProductSection.module.scss";
import Rating from "@/app/shared/ui/rating/rating";   

interface MainProductSectionProps {
  product: IProduct;
}

const MainProductSection: React.FC<MainProductSectionProps> = ({ product }) => {
  return (
    <section className={styles.single_product}>
      <div className="container">
        <div className={styles.single_product_box}>
          <SelectImage product={product} />
          <div className={styles.single_product_left}>
            <h3>{product.title}</h3>
            <div className={styles.rating}>
              <Rating
                value={product.rating}  
                activeColor="#ffd700"    
                isEditable={false}
                size={24.71}                
              />
              <p>{product.rating}/5</p> 
            </div>
            <div className={styles.price}>
              {product.oldPrice &&<span className={styles.currentPrice}>{product.price}₽</span>}
              <span className={styles.oldPrice}>{product.oldPrice}₽</span>
            </div>
            <div className={styles.description}>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProductSection;
