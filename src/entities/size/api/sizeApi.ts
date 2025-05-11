import { Size } from "../model/types";

export async function getAllSizes(token: string): Promise<Size[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/size`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch sizes');
    }
  
    return res.json();
  }
  
  export async function getSizeById(token: string, id: number): Promise<Size> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/size/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch size');
    }
  
    return res.json();
  }