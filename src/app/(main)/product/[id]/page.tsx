import { notFound } from "next/navigation";

import type { Product } from "@/entities/product/model/types";

import React from 'react'
import { getProductById } from "@/entities/product/api/api";
import { PhotoSlider } from "@/shared/ui/PhotoSlider";

export default async function ProductPage({params} : {params: {id: string}}) {
  const {id} = params;
  // const product = await getProductById(id);
  // if(!product) {
  //   notFound()
  // }

  return (
    <main>
      <h1>{id}</h1>
      <PhotoSlider/>
    </main>
  )
}
