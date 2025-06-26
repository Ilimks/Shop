'use client';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks';
import { setAuthModalOpen } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import styles from '../Footer.module.scss';
import mobile from '../FooterMobile.module.scss';
import Link from 'next/link';
import React from 'react';

export const FooterAccount = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuth = useAppSelector((state) => Boolean(state.auth.user));

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuth) {
      router.push('/account');
    } else {
      dispatch(setAuthModalOpen(true));
    }
  };

  return (
    <div className={`${styles.footer__center2} ${mobile.footer__center2}`}>
      <h3 className={`${styles.title} ${mobile.title}`}>Аккаунт</h3>
      <nav className={`${styles.footer__nav} ${mobile.footer__nav}`}>
        <ul className={`${styles.nav__ul} ${mobile.nav__ul}`}>
          <li className={`${styles.nav__ul__li} ${mobile.nav__ul__li}`}>
            <a href="/account" onClick={handleAccountClick}>Войти в аккаунт</a>
          </li>
          <li className={`${styles.nav__ul__li} ${mobile.nav__ul__li}`}>
            <Link href="/">Избранное</Link>
          </li>
          <li className={`${styles.nav__ul__li} ${mobile.nav__ul__li}`}>
            <Link href="/cart">Корзина</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
