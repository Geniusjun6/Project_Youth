import Link from "next/link";
import Image from "next/image";
import FooterMenu from "./footer-menu";
import logo from "../../public/image/logo.svg";

export default function Footer() {
  return (
    <footer className=" bg-youth_color-m p-4 h-60 content-center text-text_color-gray w-screen min-w-[320px]">
      <div className="content-center w-11/12 mx-auto">
        <div className="flex content-center justify-between">
          <div>
            <Link href="/">
              <Image className="w-10 h-10  md:w-12 md:h-12" src={logo} alt="Logo_White" />
            </Link>
          </div>
          <ul className="flex space-x-3 text-sm md:text-md md:space-x-10 items-center">
            <FooterMenu menuName={"회사소개"} href={"/about-us"} />
            <FooterMenu menuName={"문의하기"} href={"/contact"} />
            <FooterMenu menuName={"이용약관"} href={"/policy/service"} />
            <FooterMenu menuName={"개인정보 처리방침"} href={"/policy/privacy"} />
          </ul>
        </div>
        <div className="text-[11px] md:text-md mt-4">
          <span>대표이사 문준식</span>
          <span className="mx-2">|</span>
          <span>이메일 : youth@theyouth.com</span>
          <p />
          <span>서울특별시 강남구 테헤란로 000, 00층</span> <span className="mx-2">|</span>
          <span>대표전화 : 02-000-0000</span>
          <p />
          <span>사업자등록번호 : 000-00-0000</span> <span className="mx-2">|</span>
          <span>통신판매번호 : 2024-서울강남-0000</span> <span className="mx-2">|</span>
          <p className="md:hidden" />
          <span>유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호</span>
        </div>
      </div>
    </footer>
  );
}
