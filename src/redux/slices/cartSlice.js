import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShopPageActive: false,
  isCartHidden: true,
  cartItems: [],
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
    toggleCartHidden(state) {
      state.isCartHidden = !state.isCartHidden;
    },
  },
});

export const { shopPageActive, shopPageInActive, toggleCartHidden } =
  cartSlice.actions;
export default cartSlice.reducer;

//selectors
export const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.isCartHidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectShopPageActive = createSelector(
  [selectCart],
  (cart) => cart.isShopPageActive
);
