import { Product } from "../model/types";

export async function getAllProducts(token: string): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
    cache: 'no-store',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to fetch products');
  }

  return res.json();
}

export async function deleteProduct(token: string, productId: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to delete product');
  }
}

export async function createProduct(token: string, formData: FormData): Promise<Product> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to create product');
    }
  
    return res.json();
  }
  
  export async function updateProduct(token: string, productId: number, formData: FormData): Promise<Product> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to update product');
    }
  
    return res.json();
  }