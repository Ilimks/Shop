"use client"
import { useAppSelector, useAppDispatch } from '@/shared/lib/redux/hooks';
import { setAuthModalOpen } from '@/store/authSlice';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from './AuthButton.module.scss'

export const AuthButton = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector(state => state.auth);

  const handleAccountClick = () => {
    if (user) {
      router.push('/account');
    } else {
      dispatch(setAuthModalOpen(true));
      console.log('Modal open dispatched');
    }
  };

  return (
    <>
      <Image 
        onClick={handleAccountClick} 
        className={styles.account__img}
        src="/assets/icons/AccountIcon.svg" 
        alt="Иконка Аккаунт" 
        width={28} 
        height={28} 
      />
    </>
  );
};

// {user && (
//     <span className="ml-2 hidden sm:inline">
//       {user.fullName.split(' ')[0]}
//     </span>
//   )}