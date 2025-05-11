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

export async function createColor(token: string, colorData: Omit<Color, 'id'>): Promise<Color> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/color`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(colorData)
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create color');
  }

  return res.json();
}

export async function updateColor(token: string, id: number, colorData: Omit<Color, 'id'>): Promise<Color> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/color/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(colorData)
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to update color');
  }

  return res.json();
}

export async function deleteColor(token: string, id: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/color/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to delete color');
  }
}