"use client";
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux/hooks";
import { setAuthModalOpen } from "@/store/slices/authSlice";
import styles from "./AuthButton.module.scss";
import React from "react";
import Link from "next/link";

const _AuthButton = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.auth.user?.name);

  if (userName) {
    return (
      <Link href="/account" className={styles.authButton}>
        <img
          className={styles.account__img}
          src="/assets/icons/Account.svg"
          alt="Иконка Аккаунт"
          width={24}
          height={24}
        />
        <span className={styles.name}>{userName}</span>
      </Link>
    );
  }

  return (
    <div className={styles.authButton} onClick={() => dispatch(setAuthModalOpen(true))}>
      <img
        className={styles.account__img}
        src="/assets/icons/Account.svg"
        alt="Иконка Аккаунт"
        width={24}
        height={24}
      />
      <span className={styles.name}>Профиль</span>
    </div>
  );
};

export const AuthButton = React.memo(_AuthButton);
