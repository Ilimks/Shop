"use client"
import React from 'react'
import styles from './RecomendCard.module.scss'
import { IProduct } from "../../../../types";

interface  RecomendCardProps {
    product: IProduct;
  }
  
const RecomendCard:React.FC<RecomendCardProps> = ({product}) => {
  return (
    <div className={styles.content}> 
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
    </div>
  )
}

export default RecomendCard
