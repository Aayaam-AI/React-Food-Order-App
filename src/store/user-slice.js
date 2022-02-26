import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "Aayaam",
    lastName: "Agarwal",
    phoneNumber: "1234567890",
  },
  reducers: {
    changeUser(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export default userSlice;
