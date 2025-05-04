import { Order } from '../../model/types';
import styles from './OrderCard.module.scss';

interface OrderCardProps {
  order: Order;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  const formattedDate = new Date(order.createdAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Order #{order.id}</h3>
        <span className={`${styles.status} ${order.sold ? styles.completed : styles.pending}`}>
          {order.sold ? 'Completed' : 'Pending'}
        </span>
      </div>
      <div className={styles.details}>
        <p>Total: ${order.finalPrice.toFixed(2)}</p>
        <p>Date: {formattedDate}</p>
      </div>
      <div className={styles.items}>
        <h4>Products:</h4>
        <ul>
          {order.products.map((product, index) => (
            <li key={index}>
              Product ID: {product.productId} - 
              Quantity: {product.quantity}
              {product.colorId && `, Color: ${product.colorId}`}
              {product.sizeId && `, Size: ${product.sizeId}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};