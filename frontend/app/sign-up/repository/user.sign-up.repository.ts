import axios from "axios";
import { UserProps } from "../model/user";

const apiUrl = "http://localhost:8000/api/user/sign-up";

/** 이메일 중복 체크 API 요청(임시) */
export const checkDuplicateEmail = async (email: string) => {
  return true;
};

export const submitUserData = async (userData: UserProps) => {
  try {
    await axios.post(apiUrl, userData);
  } catch (error) {
    console.error("회원가입 시 에러발생", error.message);
  }
};
