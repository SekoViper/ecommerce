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
    addToCart: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload);
      console.log('add to cart', itemInCart);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity += 1;
      console.log('increament quantity', item.quantity += 1);
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
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
        state.cart = [...action.payload];
      })
      .addCase(getProductsData.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      });
  },
});

export const {
  searchProduct,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = productSlice.actions;

export default productSlice.reducer;
