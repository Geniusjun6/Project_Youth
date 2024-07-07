import { useDispatch, useSelector } from "react-redux";
import LabelAndInput from "../../components/input";
import { SignUpDispatch, RootState } from "../util/store";
import { setStep1 } from "../util/sign-up.slice";
import { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../util/validation";

export default function Step1({ emailRef, passwordRef, passowrdCheckRef }) {
  const dispatch = useDispatch<SignUpDispatch>();
  const { email, password, passwordCheck } = useSelector((state: RootState) => state.signUp);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch(
      setStep1({
        email: id === "email" ? value : email,
        password: id === "password" ? value : password,
        passwordCheck: id === "passwordCheck" ? value : passwordCheck
      })
    );
  };

  const [isValidateEmail, setValidateEmail] = useState(false);
  const [isValidatePassword, setValidatePassword] = useState(false);
  const [isValidatePasswordCheck, setValidatePasswordCheck] = useState(false);

  useEffect(() => {
    setValidateEmail(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setValidatePassword(validatePassword(password));
  }, [password]);

  useEffect(() => {
    setValidatePasswordCheck(password === passwordCheck);
  }, [passwordCheck]);

  return (
    <div className="flex flex-col justify-center space-y-8 w-11/12 mt-5 mx-auto md:w-[530px] md:mt-10">
      <div className="space-y-2">
        <h1 className="w-full text-start text-xl font-bold">1. 이메일 및 비밀번호</h1>
        <hr />
      </div>
      <div className="space-y-3">
        <LabelAndInput
          label={"이메일을 입력해주세요."}
          labelDescription="입력하신 이메일로 로그인을 하실 수 있어요."
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"ex) youth@youth.com"}
          value={email}
          onChange={handleChange}
          refValue={emailRef}
        />
        <div className="flex space-x-3 items-center justify-end">
          <p
            className={`${isValidateEmail ? null : "text-text_color-red"} "text-sm" ${
              email.length === 0 ? "hidden" : null
            }`}
          >
            {isValidateEmail ? "중복 체크를 해주세요." : "잘못된 이메일 입니다."}
          </p>
          <button
            onClick={(e) => console.log("h")}
            className="bg-youth_color-m text-text_color-gray rounded-md h-8 hover:bg-youth_color-m/70 md:rounded-lg px-4 md:h-10"
          >
            중복 체크
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <LabelAndInput
          label={"비밀번호를 입력해주세요."}
          labelDescription="영문,숫자,특수문자를 포함하여 최소 8글자를 입력해야해요."
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder={"ex) Abcd123!"}
          value={password}
          onChange={handleChange}
          refValue={passwordRef}
        />
        <p className={`${isValidatePassword ? null : "text-text_color-red"} ${!password ? "hidden" : "null"}`}>
          {isValidatePassword ? null : "비밀번호를 다시 입력해주세요."}
        </p>
      </div>
      <div>
        <LabelAndInput
          label={"비밀번호를 다시 입력해주세요."}
          labelDescription="동일한 비밀번호를 다시 입력해주세요."
          type={"password"}
          name={"passwordCheck"}
          id={"passwordCheck"}
          placeholder={"ex) Abcd123!"}
          value={passwordCheck}
          onChange={handleChange}
          refValue={passowrdCheckRef}
        />
        <p
          className={`${isValidatePasswordCheck ? null : "text-text_color-red"} ${!passwordCheck ? "hidden" : "null"}`}
        >
          {isValidatePasswordCheck ? null : "비밀번호를 다시 입력해주세요."}
        </p>
      </div>
    </div>
  );
}
