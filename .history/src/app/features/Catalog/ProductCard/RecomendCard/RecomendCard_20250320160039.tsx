
'use client'
import React from "react";
import { IProduct } from "../../../../types";
import styles from './CardPrice.module.scss'
import Rating from "@/app/shared/ui/rating/rating"; 

interface RecomendCardProps {
  product: IProduct;
}

const RecomendCard: React.FC<RecomendCardProps> = ({ product }) => {
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : null;

  return (
    <section className={styles.settings_product}>
      <div className="container">
        <div className={styles.settings_product_box}>
          <div className={styles.settings_product_left}>
            <h3>{product.title}</h3>
            <div className={styles.ratings}>
              <Rating
                value={product.rating}  
                activeColor="#ffd700"    
                isEditable={false}
                size={18.49}                
              />
              <p>{product.rating}/5</p> 
            </div>
            <div className={styles.des}>
              <span>${product.price}</span>
              {product.oldPrice && (
                <p className={styles.prices}>${product.oldPrice}</p>
              )}
              {discount && <span className={styles.discount}>-{discount}%</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecomendCard;
