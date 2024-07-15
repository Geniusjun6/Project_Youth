import axios from "axios";
import { SignIn } from "../(model)/sign-in";

const apiUrl = "http://localhost:8000/api/auth/";

/** 이메일 로그인 요청 */
export const emailSignIn = async (signInDto: SignIn) => {
  try {
    const url = `${apiUrl}auth/sign-in/email`;
    const result = await axios.post(url, signInDto);
    const { acceessToken, refreshToken } = result.data;

    return { acceessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};
