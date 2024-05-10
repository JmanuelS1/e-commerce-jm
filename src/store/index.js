import {configureStore} from "@reduxjs/toolkit";
import cart from './slices/cart.slices';
import purchases from './slices/purchases.slice';

const store = configureStore({
     reducer: {
          cart,
          purchases,
     }
});

export default store;