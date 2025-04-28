"use client";
import { useRouter } from "next/navigation";
import styles from "./SidebarAdmin.module.scss";

export const SidebarAdmin: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar_nav}>
        <ul className={styles.sidebar__nav__ul}>
          <li
            onClick={() => router.push("/admin/products")}
            className={styles.sidebar__nav__li}
          >
            Продукты
          </li>
          <li
            onClick={() => router.push("/admin/categories")}
            className={styles.sidebar__nav__li}
          >
            Категории
          </li>
          <li
            onClick={() => router.push("/admin/sizes")}
            className={styles.sidebar__nav__li}
          >
            Размеры
          </li>
          <li
            onClick={() => router.push("/admin/colors")}
            className={styles.sidebar__nav__li}
          >
            Цвета
          </li>
          <li
            onClick={() => router.push("/admin")}
            className={styles.sidebar__nav__li}
          >
            Заказы
          </li>
          <li
            onClick={() => router.push("/admin/coupons")}
            className={styles.sidebar__nav__li}
          >
            Купоны
          </li>
        </ul>
      </nav>
    </div>
  );
};
