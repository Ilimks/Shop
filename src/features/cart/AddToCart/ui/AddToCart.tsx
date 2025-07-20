"use client";
import React, { useEffect, useState } from "react";
import type { Product } from "@/entities/product/model/types";
import { useAppDispatch } from "@/shared/lib/redux/hooks";
import { addToCart, updateQuantity } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import styles from "./AddToCart.module.scss";


export const AddToCart: React.FC<{ product: Product }> = ({product}) => {
  const dispatch = useAppDispatch();
  const quantity = useSelector((state: RootState) => {
    const item = state.cart.items.find(
      (item) => (item.product.id === product.id)
    );
    return item ? item.quantity : 0;
  });

  const [localQuantity, setLocalQuantity] = useState<number>(quantity);
  
  const handleQuantity = (num: number) => {
    const newQuantity = Math.max(0, localQuantity + num);
    setLocalQuantity(newQuantity);
  };

  const handleProduct = (product: Product) => {
    if(quantity === 0) {
      dispatch(addToCart(product));
    }
    dispatch(updateQuantity({id: product.id, quantity: localQuantity}));
  };

  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

  return (
    <div className={styles.addToCart}>
      <div className={styles.quantitySwitch}>
        <button onClick={() => handleQuantity(-1)}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="9"
              stroke="#292D32"
              strokeWidth="2"
            />
            <rect x="8" y="14" width="16" height="4" rx="2" fill="#292D32" />
          </svg>
        </button>
        <div>{localQuantity}</div>
        <button onClick={() => handleQuantity(1)}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="9"
              stroke="#292D32"
              strokeWidth="2"
            />
            <path
              d="M16 8C16.8835 8.00005 17.5994 8.71617 17.5996 9.59961V14.4004H22.4004C23.2839 14.4006 24 15.1165 24 16C24 16.8835 23.2839 17.5994 22.4004 17.5996H17.5996V22.4004C17.5994 23.2838 16.8835 23.9999 16 24C15.1165 24 14.4006 23.2839 14.4004 22.4004V17.5996H9.59961C8.71614 17.5994 8.00001 16.8835 8 16C8 15.1165 8.71613 14.4006 9.59961 14.4004H14.4004V9.59961C14.4006 8.71613 15.1165 8 16 8Z"
              fill="#292D32"
            />
          </svg>
        </button>
      </div>
      <Button onClick={() => handleProduct(product)}>В корзину</Button>
    </div>
  );
};
