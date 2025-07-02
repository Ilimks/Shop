"use client";
import { useRouter } from "next/navigation";
import styles from "./Header.module.scss";
import Image from "next/image";
import { AuthButton } from "@/shared/ui/Buttons/ui/AuthButton";
import { Input } from "@/shared/ui/Input";
import { CartButton } from "@/shared/ui/Buttons/ui/CartButton";
import { FavoriteButton } from "@/shared/ui/Buttons/ui/FavoriteButton";
import { ContactButton } from "@/shared/ui/Buttons/ui/ContactButton";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__box}>
          <Image
            onClick={() => router.push("/")}
            className={styles.header__logo}
            src="/assets/icons/Logo.svg"
            alt="Header Logo"
            width={130}
            height={25}
          />

          <nav className={styles.header__nav}>
            <ul className={styles.header__nav__ul}>
              <li
                onClick={() => router.push("/catalog")}
                className={styles.header__nav__li}
              >
                Каталог
              </li>
              <li
                onClick={() => router.push("/pajamas")}
                className={styles.header__nav__li}
              >
                Пижамы
              </li>
              <li
                onClick={() => router.push("/suits")}
                className={styles.header__nav__li}
              >
                Костюмы
              </li>
              <li
                onClick={() => router.push("/robes")}
                className={styles.header__nav__li}
              >
                Халаты
              </li>
            </ul>
          </nav>

          <Input
            name="search"
            variant="headerSearch"
            inputSize="headerSearchSize"
            placeholder="Поиск..."
          />

          <div className={styles.header__nav__right}>
            <ContactButton/>
            <FavoriteButton/>
            <CartButton />
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
};
