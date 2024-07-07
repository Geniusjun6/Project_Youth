import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import LabelAndInput from "../../components/input";
import GenderSelect from "./select-gender";
import { RootState, SignUpDispatch } from "../util/store";
import { setStep2 } from "../util/sign-up.slice";

export default function Step2({ nameRef, phoneRef }) {
  const dispatch = useDispatch<SignUpDispatch>();
  const { name, phone } = useSelector((state: RootState) => state.signUp);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch(
      setStep2({
        name: id === "name" ? value : name,
        phone: id === "phone" ? value : phone
      })
    );
  };

  return (
    <div className="flex flex-col justify-center space-y-8 mt-20 mx-auto w-11/12 md:w-[530px] md:mt-20">
      <div className="space-y-2">
        <h1 className="w-full text-start text-xl font-bold">2. 개인정보</h1>
        <hr />
      </div>
      <div>
        <LabelAndInput
          label={"성함을 입력해주세요."}
          labelDescription="작성하실 이력서에 자동으로 들어가요."
          type={"text"}
          name={"name"}
          id={"name"}
          placeholder={"ex) 김청춘"}
          value={name}
          onChange={handleChange}
          refValue={nameRef}
        />
      </div>
      <div>
        <LabelAndInput
          label={"연락처를 입력해주세요."}
          labelDescription="채용 담당자가 연락할 수 있는 연락처를 적어주세요."
          type={"number"}
          name={"phone"}
          id={"phone"}
          placeholder={"ex) 01012345678"}
          value={phone}
          onChange={handleChange}
          refValue={phoneRef}
        />
      </div>
      <GenderSelect />
    </div>
  );
}
