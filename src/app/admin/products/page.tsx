import { ProductListClient } from '@/widgets/admin/products/ProductListClient/ProductListClient';
import styles from '../AdminPage.module.scss';

export default function AdminProducts() {
  return (
    <main className={styles.orderPage}>
      <ProductListClient />
    </main>
  );
}