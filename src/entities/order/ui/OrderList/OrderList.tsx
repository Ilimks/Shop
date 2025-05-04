import { Order } from '../../model/types';
import { OrderCard } from '../OrderCard/OrderCard';
import styles from './OrderList.module.scss';

interface OrderListProps {
  orders: Order[];
}

export const OrderList = ({ orders }: OrderListProps) => {
  if (orders.length === 0) {
    return <p className={styles.empty}>No orders found</p>;
  }

  return (
    <div className={styles.list}>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};