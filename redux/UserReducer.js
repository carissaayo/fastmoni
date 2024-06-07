import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    editUserDetails: {},
    loggedInUser: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    },

    editUser: (state, action) => {
      state.editUserDetails = action.payload;
    },
    loginUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { addUser, editUser, loginUser } = UsersSlice.actions;

export default UsersSlice.reducer;
