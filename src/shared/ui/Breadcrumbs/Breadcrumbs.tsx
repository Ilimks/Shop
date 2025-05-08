'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumbs.module.scss';
import Image from 'next/image';

const nameMap: Record<string, string> = {
  contacts: 'Контакты',
  catalog: 'Каталог',
  pajamas: 'Пижамы',
  cart: 'Корзина',
  suits: 'Костюмы',
  robes: 'Халаты',
  account: 'Профиль',
  favorite: 'Избранное',
  new: 'Новое поступление'
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const isLast = index === segments.length - 1;
    const label = nameMap[segment] || capitalize(segment.replace(/-/g, ' '));

    return (
      <span key={href} className={styles.breadcrumbItem}>
        {!isLast ? (
          <>
            <Link href={href} className={styles.link}>{label}</Link>
            <Image className={styles.separator} src='/assets/icons/BreadArrow.svg' alt='BreadArrow' width={8} height={12}/>
          </>
        ) : (
          <span className={styles.current}>{label}</span>
        )}
      </span>
    );
  });

  return (
    <div className="container">
        <nav className={styles.breadcrumbs}>
          <Link href="/" className={styles.link}>Главная</Link>
          {segments.length > 0 && <Image className={styles.separator} src='/assets/icons/BreadArrow.svg' alt='BreadArrow' width={8} height={12}/>}
          {crumbs}
        </nav>
    </div>
  );
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
