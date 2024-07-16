import { validateEmail } from "../../sign-up/(util)/validation";
import { focusInput } from "../../sign-up/(service)/sign-up.service";
import { SignIn, SignInRefs } from "../(model)/sign-in";

export const validateEmailLogInData = (emailSignInData: SignIn, emailSignInRefs: SignInRefs): boolean => {
  const { email, password }: SignIn = emailSignInData;
  const { emailRef, passwordRef }: SignInRefs = emailSignInRefs;

  if (!email) {
    alert("이메일을 입력하세요.");
    focusInput(emailRef);
    return false;
  }

  if (!validateEmail(email)) {
    alert("이메일 형식이 아닙니다.");
    focusInput(emailRef);
    return false;
  }

  if (!password) {
    alert("비밀번호를 입력하세요.");
    focusInput(passwordRef);
    return false;
  }

  return true;
};
