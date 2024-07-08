import { UserRefs } from "../model/user";
import { NewUserState } from "../model/user";

/** 이메일 유효성 검사 */
export const validateEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

/** 비밀번호 유효성 검사 */
export const validatePassword = (password: string): boolean => {
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
  return password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password) && specialCharPattern.test(password);
};

/** 이름 유효성 검사 */
export const isValidName = (name: string): boolean => {
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
  const numberPattern = /\d/;
  return !specialCharPattern.test(name) && !numberPattern.test(name);
};

export const validateNewUserData = (newUserData: NewUserState, userRefs: UserRefs) => {
  const { email, password, passwordCheck, name, phone, gender, isDuplicateEmail } = newUserData;
  const { emailRef, passwordRef, passwordCheckRef, nameRef, phoneRef } = userRefs;

  if (!email) {
    alert("이메일을 입력해주세요.");
    emailRef.current.focus();
    return false;
  }

  if (!validateEmail(email)) {
    alert("이메일 형식이 올바르지 않습니다.");
    emailRef.current.focus();
    return false;
  }

  if (!isDuplicateEmail) {
    alert("중복된 이메일은 사용이 불가합니다.");
    emailRef.current.focus();
    return false;
  }

  if (!password) {
    alert("비밀번호를 입력해주세요.");
    passwordRef.current.focus();
    return false;
  }

  if (!validatePassword(password)) {
    alert("비밀번호 형식이 올바르지 않습니다.");
    passwordRef.current.focus();
    return false;
  }

  if (!passwordCheck) {
    alert("확인용 비밀번호를 입력해주세요.");
    passwordCheckRef.current.focus();
    return false;
  }

  if (password !== passwordCheck) {
    alert("비밀번호가 일치하지 않습니다.");
    passwordCheckRef.current.focus();
    return false;
  }

  if (!name) {
    alert("이름을 입력해주세요");
    nameRef.current.focus();
    return false;
  }

  if (!isValidName(name)) {
    alert("잘못된 이름 형식입니다.");
    nameRef.current.focus();
    return false;
  }

  if (!phone) {
    alert("연락처를 입력해주세요");
    phoneRef.current.focus();
    return false;
  }

  if (!gender) {
    alert("성별을 선택해주세요.");
    return false;
  }

  return true;
};
