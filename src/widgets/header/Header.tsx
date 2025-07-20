import styles from "./Header.module.scss";
import mobile from "./HeaderMobile.module.scss";
import Image from "next/image";
import { AuthButton } from "@/shared/ui/Buttons/ui/AuthButton";
import { CartButton } from "@/shared/ui/Buttons/ui/CartButton";
import { FavoriteButton } from "@/shared/ui/Buttons/ui/FavoriteButton";
import { ContactButton } from "@/shared/ui/Buttons/ui/ContactButton";
import { HeaderNav } from "./ui/HeaderNav/HeaderNav";
import Link from "next/link";
import { HeaderWrapper } from "./ui/HeaderWrapper/HeaderWrapper";
import { SearchWithHistory } from "./ui/SearchWithHistory/SearchWithHistory";

export const Header: React.FC = () => {
  return (
    <header className={`${styles.header} ${mobile.header}`}>
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
        <div className={`${styles.header__box} ${mobile.header__box}`}>
          <Link href="/">
            <Image
              className={`${styles.header__logo} ${mobile.header__logo}`}
              src="/assets/icons/Logo.svg"
              alt="Header Logo"
              width={130}
              height={25}
              priority
            />
          </Link>
          
          <HeaderNav />

          <div className={`${styles.header__input} ${mobile.header__input}`}>
            <SearchWithHistory
              inputProps={{
                placeholder: "Поиск...",
                variant: "headerSearch",
                inputSize: "headerSearchSize",
              }} 
            />
          </div>

          <div
            className={`${styles.header__nav__right} ${mobile.header__nav__right}`}
          >
            <ContactButton />
            <FavoriteButton />
            <CartButton />
            <AuthButton />
          </div>

          <div className={`${styles.header__mobile} ${mobile.header__mobile}`}>
            <HeaderWrapper />
          </div>
        </div>
      </div>
    </header>
  );
};
