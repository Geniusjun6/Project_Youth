import axios from "axios";
import { SignIn } from "../(model)/sign-in";

const apiUrl = "http://localhost:8000/api/auth/";

/** 이메일 로그인 요청 */
export const emailSignIn = async (signInDto: SignIn) => {
  try {
    const url = `${apiUrl}log-in/email`;
    const result = await axios.post(url, signInDto, { withCredentials: true });

    return result.data;
  } catch (error) {
    console.error("error: ", error);
    throw new Error(error.response?.data?.message || error.message || "알 수 없는 오류가 발생했습니다.");
  }
};
