import { OrderListClient } from "@/widgets/admin/orders/OrderListClient/OrderListClient";
import styles from "./AdminPage.module.scss";

export default function Admin() {
  return (
    <main className={styles.orderPage}>
        <h1 className='adminPageTitle'>Заказы</h1>
        <OrderListClient />
    </main>
  );
}
