import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit/dist';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Slices import
import appSlice from './slices/appSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const rootReducer = combineReducers({
  app: appSlice,
  cart: cartSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
