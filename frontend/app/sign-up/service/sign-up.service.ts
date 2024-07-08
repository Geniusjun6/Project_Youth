import { reqCheckEmail } from "../repository/user.sign-up.repository";

/** 버튼 클릭 시 이메일 중복 체크 함수 */
export const checkEmailAvailability = async (email: string): Promise<boolean> => {
  try {
    const isAvailable = await reqCheckEmail(email);
    return isAvailable;
  } catch (error) {
    console.error("Error checking email availability:", error);
  }
};

/** Input이 잘못 입력되었거나 비었을 경우 포커싱 */
export const focusInput = (refValue: React.RefObject<HTMLInputElement>) => {
  refValue.current.focus();
};
