import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../model/user";

const initialState: UserProps = {
  email: "",
  password: "",
  passwordCheck: "",
  userName: "",
  phone: "",
  gender: ""
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setStep1: (state, action: PayloadAction<{ email: string; password: string; passwordCheck: string }>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordCheck = action.payload.passwordCheck;
    },
    setStep2: (state, action: PayloadAction<{ userName: string; phone: string }>) => {
      state.userName = action.payload.userName;
      state.phone = action.payload.phone;
    },
    genderSelect: (state, action: PayloadAction<{ gender: string }>) => {
      state.gender = action.payload.gender;
    }
  }
});

export const { setStep1, setStep2, genderSelect } = signUpSlice.actions;

export default signUpSlice.reducer;
