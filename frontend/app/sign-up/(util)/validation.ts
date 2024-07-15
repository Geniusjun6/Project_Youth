import { UserRefs } from "../(model)/user";
import { NewUserState } from "../(model)/user";
import { focusInput } from "../(service)/sign-up.service";

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

/** 전화번호 유효성 검사 */
const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^010\d{8}$/;
  return phoneRegex.test(phoneNumber);
};

export const validateNewUserData = (newUserData: NewUserState, userRefs: UserRefs) => {
  const { email, password, passwordCheck, name, phone, gender, isDuplicateEmail, checkEmail } = newUserData;
  const { emailRef, passwordRef, passwordCheckRef, nameRef, phoneRef } = userRefs;

  if (!email) {
    alert("이메일을 입력해주세요.");
    focusInput(emailRef);
    return false;
  }

  if (!validateEmail(email)) {
    alert("이메일 형식이 올바르지 않습니다.");
    focusInput(emailRef);
    return false;
  }

  if (!checkEmail) {
    alert("이메일 중복체크를 해주세요.");
    focusInput(emailRef);
    return false;
  }

  if (!isDuplicateEmail) {
    alert("중복된 이메일은 사용이 불가합니다.");
    focusInput(emailRef);
    return false;
  }

  if (!password) {
    alert("비밀번호를 입력해주세요.");
    focusInput(passwordRef);
    return false;
  }

  if (!validatePassword(password)) {
    alert("비밀번호 형식이 올바르지 않습니다.");
    focusInput(passwordRef);
    return false;
  }

  if (!passwordCheck) {
    alert("확인용 비밀번호를 입력해주세요.");
    focusInput(passwordCheckRef);
    return false;
  }

  if (password !== passwordCheck) {
    alert("비밀번호가 일치하지 않습니다.");
    focusInput(passwordCheckRef);
    return false;
  }

  if (!name) {
    alert("이름을 입력해주세요");
    focusInput(nameRef);
    return false;
  }

  if (!isValidName(name)) {
    alert("잘못된 이름 형식입니다.");
    focusInput(nameRef);
    return false;
  }

  if (!phone) {
    alert("연락처를 입력해주세요.");
    focusInput(phoneRef);
    return false;
  }

  if (!isValidPhoneNumber(phone)) {
    alert("연락처를 정확하게 입력해주세요.");
    focusInput(phoneRef);
    return false;
  }

  if (!gender) {
    alert("성별을 선택해주세요.");
    return false;
  }

  return true;
};
