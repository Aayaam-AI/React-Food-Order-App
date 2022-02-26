import { createSlice } from "@reduxjs/toolkit";

const initialCart = { items: [], totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    add(state, action) {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        existItem.quantity++;
        existItem.price = existItem.price + action.payload.price;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          src: action.payload.src,
          quantity: 1,
        });
      }
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    remove(state, action) {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        existItem.quantity--;
        existItem.price = existItem.price - action.payload.price;
      }
      state.totalPrice = state.totalPrice - action.payload.price;
    },

    clear(state) {
      state.items.length = 0;
    },
  },
});

export default cartSlice;
