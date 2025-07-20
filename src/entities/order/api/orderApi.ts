import { Order } from "../model/types";

export async function getAllOrders(token: string): Promise<Order[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
    cache: 'no-store',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to fetch orders');
  }

  return res.json();
}

export async function confirmOrder(token: string, orderId: number): Promise<Order> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${orderId}/sell`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to confirm order');
  }

  return res.json();
}

export async function deleteOrder(token: string, orderId: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${orderId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to delete order');
  }
}