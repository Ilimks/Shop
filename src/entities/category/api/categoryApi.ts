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

export async function createCategory(token: string, name: string, parentId?: number): Promise<Category> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, parentId })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create category');
  }

  return res.json();
}

export async function updateCategory(token: string, id: number, name: string, parentId?: number): Promise<Category> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, parentId })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to update category');
  }

  return res.json();
}

export async function deleteCategory(token: string, id: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to delete category');
  }
}