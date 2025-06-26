"use client";
import Link from 'next/link';
import React from 'react';
import styles from './NavigationBurger.module.scss';
import { NavigationBurgerProps } from '@/shared/types/types';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks';
import { setAuthModalOpen, logout } from '@/store/slices/authSlice';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export const NavigationBurger: React.FC<NavigationBurgerProps> = React.memo(({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => (pathname === path ? styles.active : '');

  const handleAccountClick = () => {
    if (user) {
      router.push('/account');
      onClose();
    } else {
      dispatch(setAuthModalOpen(true));
      onClose();
    }
  };

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`} onClick={onClose} role="presentation">
      <div className={styles.content} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Мобильное меню">
        <div className={styles.content__box}>
          <div className={styles.content__up}>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Закрыть меню"
              type="button"
            >
              <span className={styles.line__close}></span>
              <span className={styles.line__close}></span>
            </button>

            <div
              onClick={handleAccountClick}
              className={styles.content__account}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleAccountClick();
                }
              }}
            >
              <Image
                className={styles.account__img}
                src="/assets/icons/HeaderMobileAccount.svg"
                alt="Иконка Аккаунт"
                width={50}
                height={50}
                priority
              />
              <div className={styles.account__right}>
                <h4 className={styles.name}>
                  {user ? `${user.name} ${user.surname}` : 'Войти в аккаунт'}
                </h4>
                {user?.address && <p className={styles.address}>{user.address}</p>}
              </div>
            </div>
          </div>

          <nav className={styles.nav} role="navigation" aria-label="Мобильное меню навигация">
            <Link
              className={`${styles.nav__main} ${isActive('/')}`}
              href="/"
              onClick={onClose}
              prefetch={false}
            >
              Главная
            </Link>

            <div className={styles.nav__list}>
              <Link
                className={`${styles.nav__catalog} ${isActive('/catalog')}`}
                href="/catalog"
                onClick={onClose}
                prefetch={false}
              >
                Каталог
              </Link>
              <ul className={styles.nav__items}>
                <li className={`${styles.nav__item} ${isActive('/pajamas')}`}>
                  <Link href="/pajamas" onClick={onClose} prefetch={false}>
                    Пижамы
                  </Link>
                </li>
                <li className={`${styles.nav__item} ${isActive('/suits')}`}>
                  <Link href="/suits" onClick={onClose} prefetch={false}>
                    Костюмы
                  </Link>
                </li>
                <li className={`${styles.nav__item} ${isActive('/robes')}`}>
                  <Link href="/robes" onClick={onClose} prefetch={false}>
                    Халаты
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              className={`${styles.nav__favorites} ${isActive('/favorites')}`}
              href="/favorites"
              onClick={onClose}
              prefetch={false}
            >
              Избранное
            </Link>

            <Link
              className={`${styles.nav__cart} ${isActive('/cart')}`}
              href="/cart"
              onClick={onClose}
              prefetch={false}
            >
              Корзина
            </Link>

            <Link
              className={`${styles.nav__contacts} ${isActive('/contacts')}`}
              href="/contacts"
              onClick={onClose}
              prefetch={false}
            >
              Контакты
            </Link>
          </nav>
        </div>

        {user && (
          <Link
            href="/"
            onClick={() => {
              dispatch(logout());
              onClose();
            }}
            className={styles.content__bottom}
            prefetch={false}
          >
            <p className={styles.content__out}>Выйти из аккаунта</p>
          </Link>
        )}
      </div>
    </div>
  );
});
