import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./sign-up.slice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type SignUpDispatch = typeof store.dispatch;
