import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userContactSlice from "./slices/userContactSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userContact: userContactSlice,
  },
});

export default store;
