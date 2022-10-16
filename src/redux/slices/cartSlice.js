import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShopPageActive: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    shopPageActive(state) {
      state.isShopPageActive = true;
    },
    shopPageInActive(state) {
      state.isShopPageActive = false;
    },
  },
});

export const { shopPageActive, shopPageInActive } = cartSlice.actions;
export default cartSlice.reducer;

//selectors
export const selectCart = (state) => state.cart;
