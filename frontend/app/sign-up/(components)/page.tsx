"use client";

import { Provider } from "react-redux";
import Step1 from "./step1";
import Step2 from "./step2";
import BottomButton from "./bottom-button";
import { store } from "../util/store";
import { useRef } from "react";

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  return (
    <Provider store={store}>
      <div className="w-11/12 h-full mx-auto">
        <h1 className="w-full text-center text-lg md:text-2xl font-bold">회원가입</h1>
        <Step1 emailRef={emailRef} passwordRef={passwordRef} passowrdCheckRef={passwordCheckRef} />
        <Step2 nameRef={nameRef} phoneRef={phoneRef} />
        <BottomButton
          emailRef={emailRef}
          passwordRef={passwordRef}
          passwordCheckRef={passwordCheckRef}
          nameRef={nameRef}
          phoneRef={phoneRef}
        />
      </div>
    </Provider>
  );
}
