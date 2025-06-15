import { Color } from "@/entities/color/model/types";
import { Product } from "@/entities/product/model/types";
import { Size } from "@/entities/size/model/types";
import { User } from "@/entities/user/model/types";

export interface OrderProduct {
    product: Product;
    color: Color;
    size: Size;
    quantity: number;
  }
  
  export interface Order {
    id: number;
    user: User;
    products: OrderProduct[];
    createdAt: string;
    finalPrice: number;
    sold: boolean;
    status?: 'pending' | 'completed' | 'cancelled';
  }