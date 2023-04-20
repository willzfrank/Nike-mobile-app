import { configureStore } from '@reduxjs/toolkit';
import ItemSlice from './slice/ItemSlice';

export const store = configureStore({
  reducer: {
    products: ItemSlice
  }
});
