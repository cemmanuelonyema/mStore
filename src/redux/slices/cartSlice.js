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
    addItem(state, action) {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeItem(state, action) {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
  },
});

export const {
  shopPageActive,
  shopPageInActive,
  toggleCartHidden,
  addItem,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;

/****************************************************************************************************/
/************************************************** */
//selectors
/************************************************** */
/*************************************************************************************************** */

export const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.isCartHidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectShopPageActive = createSelector(
  [selectCart],
  (cart) => cart.isShopPageActive
);

/*************************************************************************************************** */
/************************************************** */
//utility functions
/************************************************** */
/*************************************************************************************************** */
const addItemToCart = (cartItems, cartItemToAdd) => {
  //check for existing item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //else, add a new item
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
