import { AxiosResponse } from "axios";
import { checkDuplicateEmail } from "../(repository)/user.sign-up.repository";

/** 버튼 클릭 시 이메일 중복 체크 함수 */
export const checkEmailAvailability = async (email: string): Promise<boolean> => {
  try {
    const user = await checkDuplicateEmail(email);

    /* 유저가 존재한다면 가입이 불가능하기 반대를 가져야 한다. */
    const isAvailable: boolean = !user.data.data;
    console.log("isAvailable: ", isAvailable);

    return isAvailable;
  } catch (error) {
    console.error("중복체크 시 에러발생", error.message);
  }
};

/** Input이 잘못 입력되었거나 비었을 경우 포커싱 */
export const focusInput = (refValue: React.RefObject<HTMLInputElement>) => {
  refValue.current.focus();
};
