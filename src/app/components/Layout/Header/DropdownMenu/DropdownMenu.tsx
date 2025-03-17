"use client";
import React from "react";
import chevronDown from "/public/assets/icons/down_chevron.svg";
import upChevron from "/public/assets/icons/up_chevron.svg";
import useDisclosure from "../../../../features/hooks/useDisclosure";
import Image from "next/image";
import styles from "./DropdownMenu.module.scss";

const DropdownMenu: React.FC = () => {
  const { isOpen, toggle } = useDisclosure();

  return (
    <div className={styles.dropdown}>
      <button onClick={toggle} className={styles.dropdown__button}>
        <span className={styles.dropdown__text}>Shop</span>
        <Image
          src={isOpen ? upChevron : chevronDown}
          width={11.5}
          height={6.5}
          alt={isOpen ? "Close menu" : "Open menu"}
        />
      </button>
      {isOpen && (
        <nav className={styles.dropdown__nav}>
          <ul>
            <li>
              <a href="/shop/clothing">Clothing</a>
            </li>
            <li>
              <a href="/shop/accessories">Accessories</a>
            </li>
            <li>
              <a href="/shop/shoes">Shoes</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default DropdownMenu;
