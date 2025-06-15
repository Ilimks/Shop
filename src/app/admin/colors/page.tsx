import { ColorListClient } from '@/widgets/admin/colors/ColorListClient/ColorListClient';
import styles from '../AdminPage.module.scss';

export default function AdminCategories() {
  return (
    <main className={styles.orderPage}>
      <ColorListClient />
    </main>
  );
}
