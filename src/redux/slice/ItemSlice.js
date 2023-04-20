import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/products';

const initialState = {
  value: 0,
  items: products,
  selectedProduct: null,
};

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const id = action.payload;
      const itemExists = state.items.find((item) => item.id === id);
      state.selectedProduct = itemExists;
    },
  },
});

export const { setSelectedProduct } = itemSlice.actions;

export default itemSlice.reducer;
