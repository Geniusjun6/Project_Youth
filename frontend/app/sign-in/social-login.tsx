import Image from "next/image";
import kakao from "/public/image/kakao.svg";
import naver from "/public/image/naver.svg";

export default function SocialLogIn() {
  return (
    <div className="mt-10 mx-auto min-w-fit">
      <div className="flex items-center justify-center">
        <div className="border-b border-black-300 w-1/4"></div>
        <div className="px-4 mx-2 text-center text-2xl font-bold">간편 로그인</div>
        <div className="border-b border-black-300 w-1/4"></div>
      </div>
      <div className="flex flex-col space-y-8 justify-center items-center md:mt-10">
        <button className="flex justify-center items-center bg-kakao md:w-[530px] md:h-[60px] md:rounded-xl md:text-xl">
          <Image src={kakao} alt="카카오 로그인 버튼" />
          카카오 로그인
        </button>
        <button className="flex justify-center items-center bg-naver text-text_color-gray md:w-[530px] md:h-[60px] md:rounded-xl md:text-xl">
          <Image src={naver} alt="네이버 로그인 버튼" />
          네이버 로그인
        </button>
      </div>
    </div>
  );
}
