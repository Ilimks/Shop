import React from "react";

import { ProductDetails } from "@/widgets/productDeatails";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";

const mock = {
  id: 0,
  name: "Пижама",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, odit quod. Ipsam assumenda suscipit a sunt non alias laborum in cupiditate perspiciatis architecto, vero magnam delectus sed temporibus aliquam tempora?",
  price: 100,
  madeIn: "Турция",
  categoryId: 1,
  createdAt: "21.01.25",
  mainImage: "/assets/images/1.webp",
  additionalImages: ["/assets/images/2.webp"],
  stock: [],
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  // const product = await getProductById(id);
  // if(!product) {
  //   notFound()
  // }

  return (
    <main>
      <Breadcrumbs />
      <section className="">   
        <ProductDetails
          id={mock.id}
          name={mock.name}
          description={mock.description}
          price={mock.price}
          madeIn={mock.madeIn}
          categoryId={mock.categoryId}
          createdAt={mock.createdAt}
          mainImage={mock.mainImage}
          additionalImages={mock.additionalImages}
          stock={mock.stock}
        />
      </section>
    </main>
  );
}
