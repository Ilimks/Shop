"use client";
import { Tabs } from "@/entities/user/ui/Tabs";
import { AccountInfo } from "@/entities/user/ui/AccountInfo";
import { PurchaseHistory } from "@/entities/user/ui/PurchaseHistory";
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux/hooks";
import styles from "./AccountSection.module.scss";
import { useRouter } from "next/navigation";
import { logout } from "@/store/slices/authSlice";
import { useEffect } from "react";

export const AccountSection: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const status = useAppSelector((state) => state.auth.status);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  useEffect(() => {
    if (status === "succeeded" && !user) {
      router.push("/login");
    }
  }, [user, status, router]);

  if (status === "loading") return <div>Loading...</div>;
  if (!user) return <div>Please login</div>;

  const tabs = [
    {
      id: "account",
      label: "Аккаунт",
      content: <AccountInfo user={user} />,
    },
    {
      id: "purchase-history",
      label: "История покупок",
      content: <PurchaseHistory userId={user.id} />,
    },
  ];

  return (
    <section className={styles.account}>
      <div className="container">
        <h1 className={styles.account__name}>
          Добро пожаловать, {user.surname} {user.name}!
        </h1>
        <Tabs tabs={tabs} defaultTab="account" />
        <button onClick={handleLogout} className={styles.logoutButton}>
          Выйти
        </button>
      </div>
    </section>
  );
};
