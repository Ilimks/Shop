import { Color } from "../model/types";

export async function getAllColors(token: string): Promise<Color[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/color`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch colors');
    }
  
    return res.json();
  }
  
  export async function getColorById(token: string, id: number): Promise<Color> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/color/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch color');
    }
  
    return res.json();
  }