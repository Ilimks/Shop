"use client";
import { useAppSelector, useAppDispatch } from '@/shared/lib/redux/hooks';
import { setAuthModalOpen, setAuthMode, resetAuthState } from '@/store/authSlice';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import styles from './AuthModal.module.scss';

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const { 
    isAuthModalOpen, 
    authMode, 
    error,
    status 
  } = useAppSelector(state => state.auth);

  const handleClose = () => {
    dispatch(setAuthModalOpen(false));
    dispatch(resetAuthState());
  };

  const switchMode = () => {
    dispatch(setAuthMode(authMode === 'login' ? 'register' : 'login'));
  };

  if (!isAuthModalOpen) return null;

  return (
    <Modal isOpen={isAuthModalOpen} onClose={handleClose}>
      <div className={styles.modalContent}>
        <Typography variant="h3" className={styles.title}>
          {authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </Typography>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        {authMode === 'login' ? (
          <LoginForm isLoading={status === 'loading'} />
        ) : (
          <RegisterForm isLoading={status === 'loading'} />
        )}

        <div className={styles.switchModeButton}>
          <Button 
            variant="show" 
            onClick={switchMode}
            text={authMode === 'login' 
              ? 'Зарегистрироваться' 
              : 'У вас уже есть аккаунт? Войти'}
          />
        </div>
      </div>
    </Modal>
  );
};