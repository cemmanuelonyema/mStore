import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    user: userSlice,
  },
});
