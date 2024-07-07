import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../model/user";

interface InitialNewUserState extends UserProps {
  isDuplicateEmail: boolean;
}

const initialState: InitialNewUserState = {
  email: "",
  password: "",
  passwordCheck: "",
  name: "",
  phone: "",
  gender: "",
  isDuplicateEmail: false
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
    setDuplicateEmail: (state, action: PayloadAction<{ isDuplicateEmail: boolean }>) => {
      state.isDuplicateEmail = action.payload.isDuplicateEmail;
    },
    setStep2: (state, action: PayloadAction<{ name: string; phone: string }>) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    genderSelect: (state, action: PayloadAction<{ gender: string }>) => {
      state.gender = action.payload.gender;
    }
  }
});

export const { setStep1, setStep2, genderSelect, setDuplicateEmail } = signUpSlice.actions;

export default signUpSlice.reducer;
