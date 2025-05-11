import { Category } from "../model/types";

export async function getAllCategories(token: string): Promise<Category[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch categories');
    }
  
    return res.json();
  }
  
  export async function getCategoryById(token: string, id: number): Promise<Category> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch category');
    }
  
    return res.json();
  }