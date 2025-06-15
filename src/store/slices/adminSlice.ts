import { createSlice } from '@reduxjs/toolkit';

interface AdminState {
  isAdmin: boolean | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  isAdmin: null,
  loading: false,
  error: null
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminStatus: (state, action) => {
      state.isAdmin = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetAdminState: () => initialState
  }
});

export const { setAdminStatus, setLoading, setError, resetAdminState } = adminSlice.actions;
export default adminSlice.reducer;