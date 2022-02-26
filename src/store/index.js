import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import itemSlice from "./item-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    item: itemSlice.reducer,
    user: userSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export const itemActions = itemSlice.actions;
export const userActions = userSlice.actions;
export default store;
