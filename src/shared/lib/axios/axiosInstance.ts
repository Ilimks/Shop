import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Добавляем токен из localStorage к каждому запросу
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

// Обработка ошибок
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error.response || error.message);
    return Promise.reject(error);
  }
);
