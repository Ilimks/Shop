import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "@/features/auth/api/authApi";
import { User } from "@/entities/user/model/types";
import { handleThunk } from "@/features/auth/api/handleThunk";

interface AuthState {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  isAuthModalOpen: boolean;
  authMode: "login" | "register";
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  loading: false,
  error: null,
  isAuthModalOpen: false,
  authMode: "login",
};

const saveAuthData = (token: string, user: User) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userData", JSON.stringify(user));
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, thunkAPI) => {
    const res = await handleThunk(
      () => authApi.login(data.email, data.password),
      thunkAPI
    );
    if ("access_token" in res && "user" in res) {
      saveAuthData(res.access_token, res.user);
      const profile = await thunkAPI.dispatch(fetchProfile());
      if (fetchProfile.rejected.match(profile))
        throw new Error("Failed to fetch profile");
      return { ...res, user: profile.payload };
    }
    return thunkAPI.rejectWithValue("Login failed");
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: any, thunkAPI) => {
    const res = await handleThunk(() => authApi.register(data), thunkAPI);
    if ("access_token" in res && "user" in res) {
      saveAuthData(res.access_token, res.user);
      const profile = await thunkAPI.dispatch(fetchProfile());
      if (fetchProfile.rejected.match(profile))
        throw new Error("Failed to fetch profile");
      return { ...res, user: profile.payload };
    }
    return thunkAPI.rejectWithValue("Registration failed");
  }
);

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, thunkAPI) => {
    const res = await handleThunk(() => authApi.fetchProfile(), thunkAPI);
    if ("id" in res) {
      localStorage.setItem("userData", JSON.stringify(res));
      return res;
    }
    return thunkAPI.rejectWithValue("Profile fetch failed");
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
    },
    setAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
    },
    setAuthMode: (state, action: PayloadAction<"login" | "register">) => {
      state.authMode = action.payload;
    },
    updateUserData: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("userData", JSON.stringify(state.user));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.user = a.payload.user;
        s.token = a.payload.access_token;
        s.isAuthModalOpen = false;
      })
      .addCase(login.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload as string;
      })
      .addCase(register.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(register.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.user = a.payload.user;
        s.token = a.payload.access_token;
        s.isAuthModalOpen = false;
      })
      .addCase(register.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload as string;
      })
      .addCase(fetchProfile.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(fetchProfile.fulfilled, (s, a) => {
        s.loading = false;
        s.user = a.payload;
      })
      .addCase(fetchProfile.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload as string;
      });
  },
});

export const { logout, setAuthModalOpen, setAuthMode, updateUserData } =
  authSlice.actions;
export default authSlice.reducer;
