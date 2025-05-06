"use client";
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux/hooks";
import { setAuthModalOpen } from "@/store/slices/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./AuthButton.module.scss";

export const AuthButton = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const handleAccountClick = () => {
    if (user) {
      router.push("/account");
    } else {
      dispatch(setAuthModalOpen(true));
    }
  };

  return (
    <div className={styles.authButton}>
      <Image
        onClick={handleAccountClick}
        className={styles.account__img}
        src="/assets/icons/Account.svg"
        alt="Иконка Аккаунт"
        width={24}
        height={24}
      />
      <span className={styles.name}>
        {user ? user.name : 'Профиль'}
      </span>
    </div>
  );
};
