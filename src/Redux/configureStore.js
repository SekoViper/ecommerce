import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './ProductSlice';

export default configureStore({ reducer: { products: ProductReducer } });
