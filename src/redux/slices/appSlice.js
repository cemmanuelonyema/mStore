import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  isNavActive: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateNavStatus(state) {
      state.isNavActive = !state.isNavActive;
    },
  },
});

export const { updateNavStatus } = appSlice.actions;
export default appSlice.reducer;

/****************************************************************************************************/
/************************************************** */
//selectors
/************************************************** */
/*************************************************************************************************** */

export const selectApp = (state) => state.app;

export const selectNavActive = createSelector(
  [selectApp],
  (cart) => cart.isNavActive
);
