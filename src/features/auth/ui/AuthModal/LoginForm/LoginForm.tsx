"use client"
import { useState } from 'react';
import { useAppDispatch } from '@/shared/lib/redux/hooks';
import { login } from '@/store/authSlice';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';
import styles from './LoginForm.module.scss';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  isLoading: boolean;
}

export const LoginForm = ({ isLoading }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    router.push('/account')
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <Input
          type="email"
          placeholder="Введите email"
          label="Email Address"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="password"
          placeholder="Введите пароль"
          label="Password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <Button 
        type="submit" 
        variant="show" 
        disabled={isLoading}
        text={isLoading ? 'Вход...' : 'Войти'}
      />
    </form>
  );
};