import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./sign-up.slice";
import checkSignUpReducer from "./sign-up-check.slice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    checkSignUp: checkSignUpReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type SignUpDispatch = typeof store.dispatch;
