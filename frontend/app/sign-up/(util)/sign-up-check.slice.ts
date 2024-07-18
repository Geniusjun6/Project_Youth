import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompeleteSignUp {
  isCompeleteSignUp: boolean;
}

export const initialState: CompeleteSignUp = {
  isCompeleteSignUp: false
};

const checkSignUpSlice = createSlice({
  name: "signUpCheck",
  initialState,
  reducers: {
    setCheckCompeleteSignUp: (state, action: PayloadAction<{ isCompeleteSignUp: boolean }>) => {
      state.isCompeleteSignUp = action.payload.isCompeleteSignUp;
    }
  }
});

export const { setCheckCompeleteSignUp } = checkSignUpSlice.actions;

export default checkSignUpSlice.reducer;
