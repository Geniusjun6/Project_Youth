"use client";

import Link from "next/link";
import LabelAndInput from "../components/input";
import { useState } from "react";

export default function EmailLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    console.log("서브밋 했습니다.");
    // 이메일 및 비밀번호를 입력하지 않았을 경우 알럿 처리 필요
    // 데이터 제출 시 서버와 통신로직 필요
  };

  return (
    <div className="mx-auto mt-5 md:mt-10 min-w-fit">
      <div className="flex items-center justify-center">
        <div className="border-b w-1/4"></div>
        <div className="px-4 mx-2 text-center font-bold text-lg md:text-2xl">이메일 로그인</div>
        <div className="border-b w-1/4"></div>
      </div>
      <div className="flex flex-col mx-auto min-w-fit items-center mt-5 md:mt-10 ">
        <form className="w-[250px] space-y-4 mb-3 md:w-[530px] md:mb-5" onSubmit={submit}>
          <LabelAndInput
            label={"이메일"}
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"이메일을 입력해주세요."}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelAndInput
            label={"비밀번호"}
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"비밀번호를 입력해주세요."}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className="bg-youth_color-m text-text_color-gray hover:bg-youth_color-m/70 w-[250px] h-10 rounded-md md:w-[530px] md:h-[60px] md:rounded-xl md:text-xl"
          onClick={submit}
        >
          이메일 로그인
        </button>
        <div className="flex flex-col md:flex-row justify-center items-center text-center mt-4 space-y-2 md:space-x-10">
          <div className="flex text-md space-x-2">
            <p>계정을 잊으셨나요?</p>
            <Link className="text-youth_color-m hover:underline" href="/sign-in/find/email">
              계정 찾기
            </Link>
          </div>
          <div className="flex text-md space-x-2">
            <p>회원이 아니신가요?</p>
            <Link className="text-youth_color-m hover:underline" href="/sign-up">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
