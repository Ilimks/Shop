import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/entities/user/model/types';
import axios from 'axios';

interface AuthResponse {
  access_token: string;
  user: User;
}

interface AuthState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isAuthModalOpen: boolean;
  authMode: 'login' | 'register';
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  loading: false,
  error: null,
  isAuthModalOpen: false,
  authMode: 'login'
};


const saveAuthData = (token: string, user: User) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userData', JSON.stringify(user));
};

export const login = createAsyncThunk<AuthResponse, { email: string; password: string }>(
  'auth/login',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      });
      
      saveAuthData(response.data.access_token, response.data.user);
      
      
      const profileResponse = await dispatch(fetchProfile());
      if (fetchProfile.rejected.match(profileResponse)) {
        throw new Error('Failed to fetch full profile');
      }
      
      return {
        access_token: response.data.access_token,
        user: profileResponse.payload as User
      };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);


export const register = createAsyncThunk<AuthResponse, { 
  name: string;
  surname: string;
  number: string;
  email: string; 
  password: string;
  address: string;
  favorites?: number[];
}>(
  'auth/register',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        ...userData,
        favorites: userData.favorites || []
      });
      
      saveAuthData(response.data.access_token, response.data.user);
      
      
      const profileResponse = await dispatch(fetchProfile());
      if (fetchProfile.rejected.match(profileResponse)) {
        throw new Error('Failed to fetch full profile');
      }
      
      return {
        access_token: response.data.access_token,
        user: profileResponse.payload as User
      };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const fetchProfile = createAsyncThunk<User>(
  'auth/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Требуется авторизация');

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem('userData', JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      localStorage.removeItem('token');
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    },
    setAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
    },
    setAuthMode: (state, action: PayloadAction<'login' | 'register'>) => {
      state.authMode = action.payload;
    },
    resetAuthState: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      return initialState;
    },
    updateUserData: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem('userData', JSON.stringify(state.user));
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.access_token;
        state.isAuthModalOpen = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.access_token;
        state.isAuthModalOpen = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { 
  logout, 
  setAuthModalOpen, 
  setAuthMode, 
  resetAuthState,
  updateUserData
} = authSlice.actions;

export default authSlice.reducer;