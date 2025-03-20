export interface IProduct {
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
    rating: number;
    reviews?: IReview[];
  }
  
  export interface IReview {
    user: string;
    comment: string;
    rating: number; 
    date: string;
  }
  