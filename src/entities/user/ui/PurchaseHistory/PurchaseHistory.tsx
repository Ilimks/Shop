"use client";
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks';
import { fetchUserOrders } from '@/store/orderSlice';
import { useEffect } from 'react';
import styles from './PurchaseHistory.module.scss';

interface PurchaseHistoryProps {
  userId: number;
}

export const PurchaseHistory = ({ userId }: PurchaseHistoryProps) => {
  const dispatch = useAppDispatch();
  const { orders, status, error } = useAppSelector((state) => state.orders);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserOrders(userId));
    }
  }, [userId, dispatch]);

  if (status === 'loading') return <div>Загрузка истории заказов...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  console.log(orders);
  

  return (
    <div className={styles.purchaseHistory}>
      <h2>Ваши заказы</h2>
      {orders.length > 0 ? (
        <ul className={styles.ordersList}>
          {orders.map((order) => (
            <li key={order.id} className={styles.orderItem}>
              <div className={styles.orderHeader}>
                <span>Заказ №{order.id}</span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              <div className={styles.orderDetails}>
                <p>Статус: {order.sold ? 'Завершен' : 'В обработке'}</p>
                <p>Сумма: {order.finalPrice} ₽</p>
                {order.coupon && <p>Купон: {order.coupon}</p>}
              </div>
              <div className={styles.products}>
                <h4>Товары:</h4>
                {order.products.map((product, index) => (
                  <div key={index} className={styles.product}>
                    <span>ID товара: {product.productId}</span>
                    <span>Количество: {product.quantity}</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noOrders}>У вас пока нет заказов</p>
      )}
    </div>
  );
};