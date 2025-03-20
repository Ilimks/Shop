"use client";
import React from "react";
import mockClothingProducts from "@/app/mock";
import { useParams } from "next/navigation";
import MainProductImage from "./MainProductSection/MainProductSection";
import { IProduct } from "../../types/Product";

const SingleProduct = () => {
  const params = useParams();
  const { id } = params;

  const selectedProduct: IProduct | undefined = mockClothingProducts.find(
    (product) => product.id === id
  );

  if (!selectedProduct) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
      <MainProductImage product={selectedProduct} />
    </div>
  );
};

export default SingleProduct;
