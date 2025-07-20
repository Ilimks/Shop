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

export async function createSize(token: string, size: string): Promise<Size> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/size`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ size })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create size');
  }

  return res.json();
}

export async function updateSize(token: string, id: number, size: string): Promise<Size> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/size/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ size })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to update size');
  }

  return res.json();
}

export async function deleteSize(token: string, id: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/size/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to delete size');
  }
}