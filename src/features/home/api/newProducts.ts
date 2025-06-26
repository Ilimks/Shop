import { getAllProducts } from "@/entities/product/api/api"; 
import { Product } from "@/entities/product/model/types";

export async function getNewProducts(): Promise<Product[]> {
  try {
    const allProducts = await getAllProducts();
    const newProducts = allProducts
    
    return newProducts;
  } catch (error) {
    console.error("Error fetching new products:", error);
    return [];
  }
}