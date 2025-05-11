import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/entities/product/model/types";
import {
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
} from "@/entities/product/api/api";

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  status: "idle",
  error: null,
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const products = await getAllProducts();
    return products;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id: string) => {
    const product = await getProductById(id);
    return product;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (categoryId: number) => {
    const products = await getProductsByCategoryId(categoryId);
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;
