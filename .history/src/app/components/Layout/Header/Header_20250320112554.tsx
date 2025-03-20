// Header.tsx
import React from 'react';
import Search from '@/app/shared/SearchInput/SearchInput';
import styles from './Header.module.scss';
import { CartIcon } from '@/app/shared/ui/icons/CartIcon';
import { ProfileIcon } from '@/app/shared/ui/icons/ProfileIcon';
import DropdownMenu from './DropdownMenu/DropdownMenu';  

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__box}>
          <h3>SHOP.CO</h3>
          <ul>
            <DropdownMenu />  
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          <Search />
          <div className={styles.user_actions}>
            <CartIcon size={28} />
            <ProfileIcon size={28} />
          </div>
        </div>
 
      </div>
    </header>
  );
};

export default Header;
