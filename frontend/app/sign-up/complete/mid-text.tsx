"use client";

import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, SignUpDispatch } from "../(util)/store";
import { setCheckCompeleteSignUp } from "../(util)/sign-up-check.slice";
import { useRouter } from "next/navigation";

export default function SignUpCompleteText() {
  const router = useRouter();
  const dispatch = useDispatch<SignUpDispatch>();
  const isSignUpCompelete = useSelector((state: RootState) => state.checkSignUp);

  useEffect(() => {
    if (!isSignUpCompelete.isCompeleteSignUp) {
      router.push("/sign-up");
      alert("잘못된 접근입니다.");
    } else {
      dispatch(
        setCheckCompeleteSignUp({
          isCompeleteSignUp: false
        })
      );
    }
  }, []);

  if (!isSignUpCompelete) {
    return null; // Sign-up이 완료되지 않았을 때는 아무것도 렌더링하지 않음
  }

  return (
    <div className="h-full mx-auto text-center mt-5 md:mt-10 px-4">
      <FontAwesomeIcon icon={faUserCheck} className="text-8xl text-youth_color-m" fixedWidth />
      <h1 className="text-lg font-bold mt-10 md:text-2xl">회원가입이 완료되었습니다.</h1>
      <div className="mt-4 md:mt-6 md:text-lg">
        <p>나의 모든 경력을 관리해보세요.</p>
        <div className="w-full mx-auto justify-center text-center">
          <p>
            지원하시는 공고에 따라 알맞은 경력을 추가하며{" "}
            <span className="block md:inline">이력서를 작성할 수 있습니다.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
