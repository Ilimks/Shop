import Link from 'next/link';
import styles from './HeaderNav.module.scss';
import mobile from './HeaderNavMobile.module.scss';

const nav = [
  { href: '/', label: 'Каталог' },
  { href: '/pajamas', label: 'Пижамы' },
  { href: '/suits', label: 'Костюмы' },
  { href: '/robes', label: 'Халаты' },
];

export const HeaderNav: React.FC = () => {
  return (
    <nav className={`${styles.nav} ${mobile.nav}`}>
      <ul className={`${styles.nav__ul} ${mobile.nav__ul}`}>
        {nav.map(({ href, label }) => (
          <li key={href} className={`${styles.nav__li} ${mobile.nav__li}`}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

