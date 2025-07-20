import { Category } from "@/entities/category/model/types";
import { Color } from "@/entities/color/model/types";
import { Size } from "@/entities/size/model/types";

export interface StockItem {
    color: Color;
    size: Size;
    quantity: number;
};
  
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    oldPrice: number;
    madeIn: string;
    brand: string;
    material: string;
    category: Category;
    createdAt: string;
    mainImage: string;
    additionalImages: string[];
    stock: StockItem[];
};