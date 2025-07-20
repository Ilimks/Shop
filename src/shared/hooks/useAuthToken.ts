import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const useAuthToken = () => {
  return useSelector((state: RootState) => state.auth.token);
};