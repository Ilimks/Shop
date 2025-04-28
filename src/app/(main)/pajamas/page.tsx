import styles from './pajamas.module.scss'
import { FilterPajamasSection } from '@/widgets/pajamas/FilterPajamasSection/FilterPajamasSection';
import { AboutPajamasSection } from '@/widgets/pajamas/FilterPajamasSection/AboutPajamasSection/AboutPajamasSection';

export default function Pajamas() {
  return (
    <main>
      <FilterPajamasSection/>
      <AboutPajamasSection/>
    </main>
  );
}