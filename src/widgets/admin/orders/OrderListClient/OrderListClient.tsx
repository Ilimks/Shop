'use client';

import { OrderList } from '@/entities/order/ui/OrderList/OrderList';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { getAllOrders } from '@/entities/order/api/orderApi';
import { useEffect, useState } from 'react';
import { Order } from '@/entities/order/model/types';
import { useRouter } from 'next/navigation';
import { Loader } from '@/shared/ui/Loader';

export const OrderListClient = () => {
  const token = useAuthToken();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  const handleOrderConfirmed = (confirmedOrder: Order) => {
    setOrders(orders.map(order => 
      order.id === confirmedOrder.id ? confirmedOrder : order
    ));
  };

  const handleOrderDeleted = (deletedOrderId: number) => {
    setOrders(orders.filter(order => order.id !== deletedOrderId));
  };

  useEffect(() => {
    if (!token) {
      setError('Authentication required');
      setLoading(false);
      return;
    }

    const loadOrders = async () => {
      try {
        const data = await getAllOrders(token);
        setOrders(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, [token]);

  if (!token) {
    router.push('/');
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <OrderList 
      orders={orders} 
      onOrderConfirmed={handleOrderConfirmed}
      onOrderDeleted={handleOrderDeleted}
    />
  );
};