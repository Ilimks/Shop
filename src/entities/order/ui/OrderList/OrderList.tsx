import { Order } from "../../model/types";
import { OrderCard } from "../OrderCard/OrderCard";
import styles from "./OrderList.module.scss";

interface OrderListProps {
  orders: Order[];
  onOrderConfirmed?: (confirmedOrder: Order) => void;
  onOrderDeleted?: (deletedOrderId: number) => void;
}

export const OrderList = ({ orders, onOrderConfirmed, onOrderDeleted }: OrderListProps) => {
  const sortedOrders = [...orders].sort((a, b) => {
    if (a.sold === b.sold) return 0;
    return a.sold ? 1 : -1;
  });

  if (sortedOrders.length === 0) {
    return <p className={styles.empty}>Заказов нет</p>;
  }

  return (
    <div className={styles.list}>
      {sortedOrders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onOrderConfirmed={onOrderConfirmed}
          onOrderDeleted={onOrderDeleted}
        />
      ))}
    </div>
  );
};