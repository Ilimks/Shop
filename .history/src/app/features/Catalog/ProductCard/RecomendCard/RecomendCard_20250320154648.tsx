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
      
    </div>
  )
}

export default RecomendCard
