import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  isNavActive: false,
  isFaqOpen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateNavStatus(state) {
      state.isNavActive = !state.isNavActive;
    },
    updateFaqStatus(state) {
      state.isFaqOpen = !state.isFaqOpen;
    },
  },
});

export const { updateNavStatus, updateFaqStatus } = appSlice.actions;
export default appSlice.reducer;

/****************************************************************************************************/
/************************************************** */
//selectors
/************************************************** */
/*************************************************************************************************** */

export const selectApp = (state) => state.app;

export const selectNavActive = createSelector(
  [selectApp],
  (app) => app.isNavActive
);

export const selectFaqActive = createSelector(
  [selectApp],
  (app) => app.isFaqOpen
);
