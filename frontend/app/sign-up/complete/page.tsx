"use client";

import SignUpCompleteText from "./mid-text";
import ServiceCards from "./service-cards";
import SignInBtn from "./sign-in-btn";

import { Provider } from "react-redux";
import { store } from "../(util)/store";

export default function SignUpComplete() {
  return (
    <Provider store={store}>
      <div className="w-11/12 h-full mx-auto justify-center items-center">
        <h1 className="w-full text-center text-lg md:text-2xl font-bold">회원가입 완료</h1>
        <SignUpCompleteText />
        <ServiceCards />
        <SignInBtn />
      </div>
    </Provider>
  );
}
