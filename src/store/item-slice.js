import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: { category: "pizza" },
  reducers: {
    toggle(state, action) {
      state.category = action.payload.category;
    },
  },
});

export default itemSlice;
