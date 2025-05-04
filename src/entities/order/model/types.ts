export interface OrderProduct {
    productId: number;
    colorId: number;
    sizeId: number;
    quantity: number;
  }
  
  export interface Order {
    id: number;
    products: OrderProduct[];
    createdAt: string;
    finalPrice: number;
    sold: boolean;
    status?: 'pending' | 'completed' | 'cancelled';
  }