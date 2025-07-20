import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import styles from './account.module.scss'
import { AccountSection } from '@/features/account/ui/AccountSection/AccountSection';

export default function Account() {
  return (
    <main>
      <Breadcrumbs/>
      <AccountSection/>
    </main>
  );
}