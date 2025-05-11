import { CategoryListClient } from '@/widgets/admin/categories/CategoryListClient/CategoryListClient';
import styles from '../AdminPage.module.scss';

export default function AdminCategories() {
  return (
    <main className={styles.orderPage}>
      <CategoryListClient />
    </main>
  );
}
