"use client";
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux/hooks";
import { setAuthModalOpen, setAuthMode } from "@/store/slices/authSlice";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { Modal } from "@/shared/ui/Modal";
import cn from "classnames";
import styles from "./AuthModal.module.scss";

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const { isAuthModalOpen, authMode, error, status } = useAppSelector(
    (state) => state.auth
  );

  const handleClose = () => {
    dispatch(setAuthModalOpen(false));
  };

  const switchMode = (mode: "login" | "register") => {
    dispatch(setAuthMode(mode));
  };

  if (!isAuthModalOpen) return null;

  return (
    <Modal isOpen={isAuthModalOpen} onClose={handleClose}>
      <div className={styles.modalContent}>

          <div className={styles.tabs}>
              <button
                className={cn(styles.tab, authMode === "login" && styles.activeTab)}
                onClick={() => switchMode("login")}
              >
                Вход
              </button>
              <button
                className={cn(styles.tab, authMode === "register" && styles.activeTab)}
                onClick={() => switchMode("register")}
              >
                Регистрация
              </button>
          </div>
  
          <div className={styles.tabs__to}>
              {error && <div className={styles.errorMessage}>{error}</div>}
              
              {authMode === "login" ? (
                <LoginForm isLoading={status === "loading"} />
              ) : (
                <RegisterForm isLoading={status === "loading"} />
              )}
          </div>
      </div>
    </Modal>
  );
};
