import { Order } from '../../model/types';
import styles from './OrderCard.module.scss';
import { confirmOrder, deleteOrder } from '../../api/orderApi';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import { useState } from 'react';

interface OrderCardProps {
  order: Order;
  onOrderConfirmed?: (confirmedOrder: Order) => void;
  onOrderDeleted?: (deletedOrderId: number) => void;
}

export const OrderCard = ({ order, onOrderConfirmed, onOrderDeleted }: OrderCardProps) => {
  const token = useAuthToken();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedDate = new Date(order.createdAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleConfirmOrder = async () => {
    if (!token) return;
    
    setIsConfirming(true);
    setError(null);
    
    try {
      const confirmedOrder = await confirmOrder(token, order.id);
      if (onOrderConfirmed) {
        onOrderConfirmed(confirmedOrder);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to confirm order');
    } finally {
      setIsConfirming(false);
    }
  };

  const handleDeleteOrder = async () => {
    if (!token) return;
    
    setIsDeleting(true);
    setError(null);
    
    try {
      await deleteOrder(token, order.id);
      if (onOrderDeleted) {
        onOrderDeleted(order.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete order');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Заказ №{order.id}</h3>
        <span className={`${styles.status} ${order.sold ? styles.completed : styles.pending}`}>
          {order.sold ? 'Продан' : 'В ожидании'}
        </span>
      </div>
      <div className={styles.details}>
        <p>Общая сумма: {order.finalPrice.toFixed(2)} сом</p>
        <p>Дата: {formattedDate}</p>
      </div>
      <div className={styles.details}>
        <p>Заказчик: {order.user?.surname} {order.user?.name}</p>
        <p>Номер телефона и почта: {order.user?.number || 'Не указан'}, {order.user?.email}</p>
      </div>
      <div className={styles.items}>
        <h4>Продукты:</h4>
        <ul>
          {order.products.map((product, index) => (
            <li key={index}>
              ID продукта: {product.product?.id}, Название: {product.product?.name} - 
              Количество: {product.quantity}
              {product.color?.color && `, Цвет: ${product.color.color}`}
              {product.size?.size && `, Размер: ${product.size.size}`}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.actions}>
        {!order.sold && (
          <button 
            onClick={handleConfirmOrder}
            disabled={isConfirming}
            className={styles.confirmButton}
          >
            {isConfirming ? 'Подтверждение...' : 'Подтвердить заказ'}
          </button>
        )}
        <button 
          onClick={handleDeleteOrder}
          disabled={isDeleting}
          className={styles.deleteButton}
        >
          {isDeleting ? 'Удаление...' : 'Удалить заказ'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};