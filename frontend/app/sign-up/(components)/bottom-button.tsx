import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../util/store";
import { UserProps } from "../model/user";
import { submitUserData } from "../repository/user.sign-up.repository";

export default function BottonButtons({ nameRef, phoneRef }) {
  const userData: UserProps = useSelector((state: RootState) => state.signUp);
  const { email, password, passwordCheck, name, phone }: UserProps = userData;

  /** 회원가입 버튼 클릭 시 데이터 서버로 전송 */
  const handleSubmitUserData = () => {
    submitUserData(userData);
  };

  return (
    <div className="flex justify-between mx-auto mt-16 w-11/12 md:mt-32 md:w-[530px]">
      <Link href="/sign-in">
        <button className="bg-text_color-gray2 text-text_color-gray hover:bg-text_color-gray2/70 w-[130px] h-10 rounded-md md:w-60 md:h-12 md:rounded-lg md:text-lg">
          이전으로
        </button>
      </Link>

      <button
        onClick={handleSubmitUserData}
        className="bg-youth_color-m text-text_color-gray hover:bg-youth_color-m/70 w-[180px] h-10 rounded-md md:w-60 md:h-12 md:rounded-lg md:text-lg"
      >
        회원가입하기
      </button>
    </div>
  );
}
