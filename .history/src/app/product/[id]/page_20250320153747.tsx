"use client";
import React from "react";
import mockClothingProducts from "@/app/mock";
import { useParams } from "next/navigation";
import MainProductImage from "./MainProductSection/MainProductSection";
import { IProduct } from "../../types";
import Catalog from "@/app/features/Catalog/Catalog";
const SingleProduct = () => {
  const params = useParams();
  const { id } = params;

  const selectedProduct = mockClothingProducts.find(
    (product) => product.id === id
  ) as IProduct | undefined;

  if (!selectedProduct) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
      <MainProductImage product={selectedProduct}/>
      <Catalog/>
    </div>
  );
};

export default SingleProduct;
