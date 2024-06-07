import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./redux/UserReducer";
// import GeneralReducer from "./redux/GeneralReducer";

export default configureStore({
  reducer: {
    user: UsersReducer,
    // general: GeneralReducer,
  },
});
