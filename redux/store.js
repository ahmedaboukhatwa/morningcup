import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';

const store = configureStore({
  reducer:{
    products: productsSlice,
  }
  // Add any middleware or enhancers if needed
});

export default store;
