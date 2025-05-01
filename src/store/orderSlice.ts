import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface OrderItem {
  productId: number;
  colorId: number;
  sizeId: number;
  quantity: number;
}

interface Order {
  id: number;
  user: number | null;
  products: OrderItem[];
  createdAt: string;
  coupon: string | null;
  finalPrice: number;
  sold: boolean;
}

interface OrderState {
  orders: Order[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  status: 'idle',
  error: null
};

export const fetchUserOrders = createAsyncThunk<Order[], number>(
  'orders/fetchUserOrders',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order?userId=${userId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch orders');
    }
  }
);

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  }
});

export default orderSlice.reducer;