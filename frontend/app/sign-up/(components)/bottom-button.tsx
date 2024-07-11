import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState, SignUpDispatch } from "../util/store";
import { User, UserRefs } from "../model/user";
import { submitUserData } from "../repository/user.sign-up.repository";
import { validateNewUserData } from "../util/validation";
import { NewUserState } from "../model/user";
import { useRouter } from "next/navigation";
import { setCheckCompeleteSignUp } from "../util/sign-up-check.slice";

export default function BottonButtons({ emailRef, passwordRef, passwordCheckRef, nameRef, phoneRef }) {
  const router = useRouter();
  const dispatch = useDispatch<SignUpDispatch>();

  const newUser: NewUserState = useSelector((state: RootState) => state.signUp);
  const { isDuplicateEmail, checkEmail, ...userProps } = newUser;

  const userRefs: UserRefs = { emailRef, passwordRef, passwordCheckRef, nameRef, phoneRef };

  // 유저 클래스를 이용하여 신규 유저 만들기
  const newUserData = new User(userProps);

  /** 회원가입 버튼 클릭 시 데이터 서버로 전송 */
  const handleSubmitUserData = () => {
    if (validateNewUserData(newUser, userRefs)) {
      submitUserData(newUserData);

      // 회원가입 완료 상태로 변경
      dispatch(
        setCheckCompeleteSignUp({
          isCompeleteSignUp: true
        })
      );

      router.push("/sign-up/complete");
    } else {
      return;
    }
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
