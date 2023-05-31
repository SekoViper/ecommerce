/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

const initialState = {
  products: [],
  filteredProduct: [],
  cart: [],
  status: 'idle',
  error: null,
  quantity: 34,
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


// Load cart data from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

// Save cart data to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

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
    // Add a new action to update the cart state and persist it to localStorage
    updateCart: (state, action) => {
      state.cart = action.payload;
      saveCartToLocalStorage(action.payload);
    },
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity += 1;
      console.log('increment quantity', item.quantity += 1);
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
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
      })
      .addCase(getProductsData.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      })
      // Add a case to load cart data from localStorage on initial state
      .addDefaultCase((state) => {
      state.cart = loadCartFromLocalStorage();
    });
  },
});

// export const {
//   searchProduct,
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeItem,
// } = productSlice.actions;

// export default productSlice.reducer;

export const { searchProduct, addToCart, incrementQuantity, decrementQuantity, removeItem, updateCart } =
  productSlice.actions;

export default productSlice.reducer;