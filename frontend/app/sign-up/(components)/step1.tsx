import { useRef, useState } from "react";
import LabelAndInput from "../../components/input";
import Link from "next/link";
import { checkEmailAvailability, focusInput } from "../service/sign-up.service";
import { validateEmail, validatePassword } from "../util/validation";

export default function Step1({ toNextStep }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState("");
  const [duplicateEmailCheck, setEmailCheck] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);

  /** 이메일 중복 체크 버튼 클릭 시 상태 변경 */
  const handleCheckEmail = async () => {
    try {
      const isAvailable = await checkEmailAvailability(email);
      if (isAvailable) {
        setEmailCheck(true);
      } else {
        alert("사용할 수 없는 이메일 입니다.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  /** 다음으로 버튼 클릭 시 데이터 유효성 검사 이후 다음 단계 이동 */
  const handleNext = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("이메일을 입력해주세요.");
      focusInput(emailRef);
      return;
    }

    if (!duplicateEmailCheck) {
      alert("이메일 중복 체크를 진행해주세요.");
      return;
    }

    if (!validatePassword(password)) {
      alert("비밀번호를 다시 입력해주세요.");
      focusInput(passwordRef);
      return;
    }

    if (password !== passwordCheck) {
      alert("확인용 비밀번호를 다시 입력해주세요.");
      focusInput(passwordCheckRef);
      return;
    }

    toNextStep({ email, password, passwordCheck });
  };

  return (
    <div className="flex flex-col justify-center space-y-8 mt-5 w-fit mx-auto md:w-[530px] md:mt-10">
      <div className="space-y-3">
        <LabelAndInput
          label={"이메일을 입력해주세요."}
          labelDescription="입력하신 이메일로 로그인을 하실 수 있어요."
          type={"text"}
          name={"email"}
          id={"email"}
          placeholder={"ex) youth@youth.com"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          refValue={emailRef}
        />
        <div className="flex space-x-3 items-center justify-end">
          <p className="text-sm">ggg</p>
          <button
            onClick={handleCheckEmail}
            className="bg-youth_color-m text-text_color-gray rounded-md h-8 hover:bg-youth_color-m/70 md:rounded-lg px-4 md:h-10"
          >
            중복 체크
          </button>
        </div>
      </div>
      <div>
        <LabelAndInput
          label={"비밀번호를 입력해주세요."}
          labelDescription="영문,숫자,특수문자를 포함하여 최소 8글자를 입력해야해요."
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder={"ex) Abcd123!"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          refValue={passwordRef}
        />
      </div>
      <div>
        <LabelAndInput
          label={"비밀번호를 다시 입력해주세요."}
          labelDescription="동일한 비밀번호를 다시 입력해주세요."
          type={"password"}
          name={"passwordCheck"}
          id={"passwordCheck"}
          placeholder={"ex) Abcd123!"}
          value={passwordCheck}
          onChange={(e) => {
            setpasswordCheck(e.target.value);
          }}
          refValue={passwordCheckRef}
        />
      </div>
      <div className="flex justify-between">
        <Link href="/sign-in">
          <button className="bg-text_color-gray2 text-text_color-gray hover:bg-text_color-gray2/70 w-[150px] h-10 rounded-md md:w-60 md:h-12 md:rounded-lg md:text-lg">
            취소하고 돌아가기
          </button>
        </Link>
        <button
          onClick={handleNext}
          className="bg-youth_color-m text-text_color-gray hover:bg-youth_color-m/70 w-[150px] h-10 rounded-md md:w-60 md:h-12 md:rounded-lg md:text-lg"
        >
          다음으로
        </button>
      </div>
    </div>
  );
}
