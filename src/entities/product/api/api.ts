import { Product } from "../model/types";

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getProductsByCategoryId(
  categoryId: number
): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category/${categoryId}`,
    { cache: "no-store" }
  );

  return res.json();
}

export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product by ID");

  return res.json();
}
