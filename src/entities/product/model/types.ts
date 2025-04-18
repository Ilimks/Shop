export interface StockItem {
    colorId: number;
    sizeId: number;
    quantity: number;
};
  
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    madeIn: string;
    categoryId: number;
    createdAt: string;
    mainImage: string;
    additionalImages: string[];
    stock: StockItem[];
};