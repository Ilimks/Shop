import { ReactNode } from "react";

export interface IProduct {
    name: ReactNode;
    id: string;
    title: string;
    images: string[];
    price: number;
    oldPrice?: number;
    description: string;
    available: number;
    tags: string[];
    brand: string;
    article: string;
    sizes: string[];
    colors: string[];
    reviews?: IReview[];
    discountPercentage?: number;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface IReview {
    user: string;
    comment: string;
    rating: number; 
    date: string;
  }
  