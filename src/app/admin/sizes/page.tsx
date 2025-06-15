import styles from '../AdminPage.module.scss';
import { SizeListClient } from '@/widgets/admin/sizes/SizeListClient/SizeListClient';

export default function AdminCategories() {
  return (
    <main className={styles.orderPage}>
      <SizeListClient />
    </main>
  );
}
