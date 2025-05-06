import { AxiosResponse } from 'axios';

export const handleThunk = async <T>(
  request: () => Promise<AxiosResponse<T>>,
  { rejectWithValue }: any
): Promise<T | ReturnType<typeof rejectWithValue>> => {
  try {
    const { data } = await request();
    return data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || 'Unknown error';
    return rejectWithValue(message);
  }
};