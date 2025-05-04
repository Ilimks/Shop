import { OrderListClient } from '@/widgets/admin/orders/OrderListClient/OrderListClient';
import styles from './AdminPage.module.scss';

export default function Admin() {
  return (
    <main className={styles.admin}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>Order Management</h1>
        <OrderListClient />
      </div>
    </main>
  );
}