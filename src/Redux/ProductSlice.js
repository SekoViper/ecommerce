/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

const initialState = {
  products: [],
  filteredProduct: [],
  status: 'idle',
  error: null,
};

// create the thunk
export const getProductsData = createAsyncThunk(
  'products/getProductsData',
  async () => {
    const res = await fetch(PRODUCT_API_URL);
    const data = await res.json();
    return data;
  },
);

// handle actions in reducers:
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    searchProduct: (state, action) => ({
      ...state,
      filteredProduct: state.products.filter(
        (product) => product.title.includes(action.payload)
          || product.category.includes(action.payload),
      ),
    }),
  },

  extraReducers(builder) {
    builder
      .addCase(getProductsData.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.products = [...action.payload];
        state.filteredProduct = [...action.payload];
      })
      .addCase(getProductsData.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      });
  },
});

export const { searchProduct } = productSlice.actions;

export default productSlice.reducer;
