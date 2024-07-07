import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, SignUpDispatch } from "../util/store";
import { genderSelect } from "../util/sign-up.slice";

export default function GenderSelect() {
  const dispatch = useDispatch<SignUpDispatch>();
  const { gender } = useSelector((state: RootState) => state.signUp);
  const [selectedGender, setSelectedGender] = useState<string | null>(gender);

  useEffect(() => {
    setSelectedGender(gender);
  }, [gender]);

  const handleGenderSelect = (selected: string) => {
    setSelectedGender(selected);
    dispatch(
      genderSelect({
        gender: selected
      })
    );
  };
  return (
    <div className="space-y-2">
      <div>
        <h1 className="font-bold md:text-lg">성별을 선택해주세요.</h1>
        <p className="text-sm font-normal text-text_color-gray2">본인의 성별을 선택해주세요.</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleGenderSelect("male")}
          className={`${
            selectedGender === "male" ? "bg-youth_color-m" : "bg-text_color-gray2 hover:bg-text_color-gray2/70"
          } text-text_color-gray w-[130px] h-10 rounded-md md:w-60 md:h-12 md:rounded-lg md:text-lg`}
        >
          남성
        </button>
        <button
          onClick={() => handleGenderSelect("female")}
          className={`${
            selectedGender === "female" ? "bg-youth_color-m" : "bg-text_color-gray2 hover:bg-text_color-gray2/70"
          } text-text_color-gray w-[130px] h-10 rounded-md md:w-60 md:h-12 md:rounded-lg md:text-lg`}
        >
          여성
        </button>
      </div>
    </div>
  );
}
