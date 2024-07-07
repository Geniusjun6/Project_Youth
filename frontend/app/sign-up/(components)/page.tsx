"use client";

import { Provider } from "react-redux";
import Step1 from "./step1";
import Step2 from "./step2";
import BottomButton from "./bottom-button";
import { store } from "../util/store";

export default function SignUp() {
  return (
    <Provider store={store}>
      <div className="w-11/12 h-full mx-auto">
        <h1 className="w-full text-center text-lg md:text-2xl font-bold">회원가입</h1>
        <Step1 />
        <Step2 />
        <BottomButton />
      </div>
    </Provider>
  );
}
