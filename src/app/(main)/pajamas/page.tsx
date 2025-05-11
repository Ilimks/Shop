import styles from './pajamas.module.scss'
import { FilterPajamasSection } from '@/features/pajamas/ui/FilterPajamasSection/FilterPajamasSection';
import { AboutPajamasSection } from '@/features/pajamas/ui/AboutPajamasSection/AboutPajamasSection';

export default function Pajamas() {
  return (
    <main>
      <FilterPajamasSection/>
      <AboutPajamasSection/>
    </main>
  );
}