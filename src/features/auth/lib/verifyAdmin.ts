import axios from 'axios';

export const verifyAdminToken = async (token: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-admin`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.isAdmin;
  } catch (error) {
    console.error('Admin verification failed:', error);
    return false;
  }
};