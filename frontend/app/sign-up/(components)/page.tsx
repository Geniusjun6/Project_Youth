"use client";

import { useState } from "react";
import Step1 from "./step1";

export default function SignUp() {
  const [step, setStep] = useState(1);

  /** 다음 Step으로 설정하는 함수 */
  const toNextStep = () => {
    setStep((acc) => acc + 1);
  };

  /** 이전 Step으로 설정하는 함수 */
  const toPrevStep = () => {
    setStep((acc) => acc - 1);
  };

  return (
    <div className="w-11/12 h-full mx-auto">
      <h1 className="w-full text-center text-lg md:text-2xl font-bold">회원가입</h1>
      {step === 1 && <Step1 toNextStep={toNextStep} />}
      {step === 2 && null}
    </div>
  );
}
