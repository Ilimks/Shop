import { axiosInstance } from "../../../shared/lib/axios/axiosInstance";
import { User } from "@/entities/user/model/types";

interface AuthResponse {
  access_token: string;
  user: User;
}

export const authApi = {
  login: (email: string, password: string) =>
    axiosInstance.post<AuthResponse>("/auth/login", { email, password }),

  register: (data: {
    name: string;
    surname: string;
    number: string;
    email: string;
    password: string;
    address: string;
    favorites?: number[];
  }) => axiosInstance.post<AuthResponse>("/auth/register", data),

  fetchProfile: () => axiosInstance.get<User>("/auth/profile"),
};
