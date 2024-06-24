import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishListSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
