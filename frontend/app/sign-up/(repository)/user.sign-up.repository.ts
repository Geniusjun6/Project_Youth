import axios from "axios";
import { UserProps } from "../(model)/user";

const apiUrl = "http://localhost:8000/api/user/";

/** 이메일 중복 체크 API 요청 */
export const checkDuplicateEmail = async (email: string) => {
  try {
    const url = `${apiUrl}find-user?email=${email}`;
    return await axios.get(url);
  } catch (error) {
    throw error;
  }
};

/** 신규 회원가입 요청 */
export const submitUserData = async (userData: UserProps): Promise<void> => {
  try {
    const url: string = apiUrl + "sign-up";
    await axios.post(url, userData);
  } catch (error) {
    throw error;
  }
};
