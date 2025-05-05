'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks';
import { setAdminStatus, setError, setLoading } from '@/store/adminSlice';
import { verifyAdminToken } from '@/features/auth/lib/verifyAdmin';
import { logout } from '@/store/authSlice';
import { Loader } from '@/shared/ui/Loader';
import { SidebarAdmin } from '@/widgets/sidebarAdmin/SidebarAdmin';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);
  const { isAdmin, loading } = useAppSelector((state) => state.admin);

  useEffect(() => {
    const verifyAdmin = async () => {
      if (!token) {
        router.push('/');
        return;
      }

      dispatch(setLoading(true));
      try {
        const isAdmin = await verifyAdminToken(token);
        if (!isAdmin) {
          dispatch(logout());
          router.push('/');
        }
        dispatch(setAdminStatus(isAdmin));
      } catch (error) {
        dispatch(setError('Failed to verify admin privileges'));
        dispatch(logout());
        router.push('/');
      }
    };

    verifyAdmin();
  }, [token, dispatch, router]);

  if (loading || isAdmin === null) {
    return <Loader />;
  }

  if (!isAdmin) {
    return null;
  }

  return <div className='container'>
  <SidebarAdmin/>
  {children}
  </div>;
};